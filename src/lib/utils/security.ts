/**
 * Security utilities for input sanitization and XSS protection
 */

/**
 * Sanitizes a string by removing potentially dangerous characters
 * @param input - The input string to sanitize
 * @returns Sanitized string safe for display
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }

  // Remove null bytes and control characters
  let sanitized = input.replace(/[\x00-\x1F\x7F]/g, '');

  // Remove script tags and event handlers
  sanitized = sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=\s*[^\s>]*/gi, '');

  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '');

  // Remove data: URLs that could be dangerous
  sanitized = sanitized.replace(/data:(?!image\/[png|jpg|jpeg|gif|webp|svg];base64,)/gi, '');

  // Trim whitespace
  sanitized = sanitized.trim();

  return sanitized;
}

/**
 * Validates and sanitizes email input
 * @param email - Email string to validate and sanitize
 * @returns Sanitized email or empty string if invalid
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') {
    return '';
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeInput(email.trim().toLowerCase());

  // Validate email format
  if (!emailRegex.test(sanitized)) {
    return '';
  }

  // Additional check: email should not contain dangerous characters
  if (/[<>\"'&]/.test(sanitized)) {
    return '';
  }

  return sanitized;
}

/**
 * Validates and sanitizes name input
 * @param name - Name string to validate and sanitize
 * @returns Sanitized name or empty string if invalid
 */
export function sanitizeName(name: string): string {
  if (typeof name !== 'string') {
    return '';
  }

  // Remove HTML tags and dangerous characters
  let sanitized = sanitizeInput(name.trim());

  // Name should only contain letters, spaces, hyphens, apostrophes, and periods
  sanitized = sanitized.replace(/[^a-zA-Z\s'.-]/g, '');

  // Limit length
  if (sanitized.length > 100) {
    sanitized = sanitized.substring(0, 100);
  }

  return sanitized;
}

/**
 * Validates and sanitizes message input
 * @param message - Message string to validate and sanitize
 * @param maxLength - Maximum allowed length (default: 5000)
 * @returns Sanitized message or empty string if invalid
 */
export function sanitizeMessage(message: string, maxLength: number = 5000): string {
  if (typeof message !== 'string') {
    return '';
  }

  // Remove HTML tags but preserve line breaks
  let sanitized = sanitizeInput(message);

  // Convert line breaks to spaces for basic sanitization
  sanitized = sanitized.replace(/\r\n/g, ' ').replace(/\n/g, ' ').replace(/\r/g, ' ');

  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
}

/**
 * Escapes HTML special characters to prevent XSS
 * @param text - Text to escape
 * @returns Escaped text safe for HTML display
 */
export function escapeHtml(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Validates URL to prevent XSS through malicious links
 * @param url - URL to validate
 * @returns true if URL is safe, false otherwise
 */
export function isValidUrl(url: string): boolean {
  if (typeof url !== 'string' || !url.trim()) {
    return false;
  }

  try {
    const urlObj = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false;
    }

    // Block javascript: and data: protocols
    if (url.toLowerCase().startsWith('javascript:') || url.toLowerCase().startsWith('data:')) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Validates input length
 * @param input - Input string
 * @param minLength - Minimum length
 * @param maxLength - Maximum length
 * @returns true if length is valid
 */
export function validateLength(input: string, minLength: number, maxLength: number): boolean {
  if (typeof input !== 'string') {
    return false;
  }
  const length = input.trim().length;
  return length >= minLength && length <= maxLength;
}

/**
 * Validates and sanitizes phone number
 * @param phone - Phone number string to validate
 * @returns Sanitized phone number or empty string if invalid
 */
export function sanitizePhone(phone: string): string {
  if (typeof phone !== 'string') {
    return '';
  }

  // Remove all non-digit characters except +, -, spaces, and parentheses
  let sanitized = phone.replace(/[^\d+\-()\s]/g, '').trim();

  // Limit length (international phone numbers can be up to 15 digits)
  if (sanitized.length > 20) {
    sanitized = sanitized.substring(0, 20);
  }

  return sanitized;
}

/**
 * Checks if a string contains potentially malicious patterns
 * @param input - Input string to check
 * @returns true if potentially malicious, false otherwise
 */
export function containsMaliciousPattern(input: string): boolean {
  if (typeof input !== 'string') {
    return false;
  }

  const maliciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /expression\(/i,
    /@import/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];

  return maliciousPatterns.some((pattern) => pattern.test(input));
}

/**
 * Generates a Content Security Policy nonce
 * Note: This is a simple implementation. For production, use a proper nonce generator.
 * @returns A random nonce string
 */
export function generateNonce(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }
  // Fallback for server-side or older browsers
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
