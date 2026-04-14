/**
 * Rate limiting utility for client-side protection
 * Note: This is a basic client-side rate limiter. For production, implement server-side rate limiting.
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
  maxRequests: number; // Maximum number of requests
  windowMs: number; // Time window in milliseconds
  keyGenerator?: () => string; // Custom key generator (default: uses IP or session)
}

/**
 * Default rate limit configuration
 */
const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 5, // 5 requests
  windowMs: 15 * 60 * 1000, // 15 minutes
};

/**
 * Generates a rate limit key (client-side uses sessionStorage)
 */
function generateKey(identifier?: string): string {
  if (typeof window === 'undefined') {
    return 'server';
  }

  // Try to get or create a session ID
  let sessionId = sessionStorage.getItem('rateLimitSessionId');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('rateLimitSessionId', sessionId);
  }

  return identifier ? `${identifier}_${sessionId}` : sessionId;
}

/**
 * Checks if a request should be rate limited
 * @param identifier - Optional identifier for the rate limit (e.g., 'contact-form')
 * @param config - Rate limit configuration
 * @returns Object with allowed status and remaining requests
 */
export function checkRateLimit(
  identifier: string = 'default',
  config: Partial<RateLimitConfig> = {}
): { allowed: boolean; remaining: number; resetTime: number } {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const key = generateKey(identifier);
  const now = Date.now();

  // Clean up expired entries
  Object.keys(store).forEach((k) => {
    if (store[k].resetTime < now) {
      delete store[k];
    }
  });

  // Get or create entry
  let entry = store[key];
  if (!entry || entry.resetTime < now) {
    entry = {
      count: 0,
      resetTime: now + finalConfig.windowMs,
    };
    store[key] = entry;
  }

  // Check if limit exceeded
  if (entry.count >= finalConfig.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment count
  entry.count++;

  return {
    allowed: true,
    remaining: finalConfig.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Resets rate limit for a given identifier
 * @param identifier - Optional identifier for the rate limit
 */
export function resetRateLimit(identifier: string = 'default'): void {
  const key = generateKey(identifier);
  delete store[key];
}

/**
 * Gets remaining requests for a given identifier
 * @param identifier - Optional identifier for the rate limit
 * @returns Remaining requests or null if no limit exists
 */
export function getRemainingRequests(identifier: string = 'default'): number | null {
  const key = generateKey(identifier);
  const entry = store[key];
  
  if (!entry || entry.resetTime < Date.now()) {
    return null;
  }

  return Math.max(0, DEFAULT_CONFIG.maxRequests - entry.count);
}

