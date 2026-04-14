'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Alert from '@/components/ui/Alert';
import Spinner from '@/components/ui/Spinner';
import { ContactFormData, FormErrors } from '@/types';
import { sanitizeName, sanitizeEmail, sanitizeMessage, validateLength } from '@/lib/utils/security';
import { checkRateLimit, getRemainingRequests } from '@/lib/utils/rateLimit';

type AlertType = 'success' | 'error' | 'warning' | 'info';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<AlertType>('info');
  const [btnType, setBtnType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitRemaining, setRateLimitRemaining] = useState<number | null>(null);

  useEffect(() => {
    setRateLimitRemaining(getRemainingRequests('contact-form'));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    if (name === 'name') sanitizedValue = sanitizeName(value);
    else if (name === 'email') sanitizedValue = sanitizeEmail(value) || value;
    else if (name === 'message') sanitizedValue = sanitizeMessage(value, 5000);
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitizedName = sanitizeName(formData.name);
    if (!sanitizedName || !formData.name.trim()) newErrors.name = 'Name is required';
    else if (!nameRegex.test(sanitizedName)) newErrors.name = 'Invalid name format';
    else if (!validateLength(sanitizedName, 2, 100)) newErrors.name = 'Name must be between 2 and 100 characters';
    const sanitizedEmail = sanitizeEmail(formData.email);
    if (!sanitizedEmail || !formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(sanitizedEmail)) newErrors.email = 'Invalid email format';
    else if (!validateLength(sanitizedEmail, 5, 254)) newErrors.email = 'Email must be between 5 and 254 characters';
    if (formData.message && !validateLength(formData.message, 0, 5000)) newErrors.message = 'Message must not exceed 5000 characters';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const rateLimit = checkRateLimit('contact-form', { maxRequests: 5, windowMs: 15 * 60 * 1000 });
    if (!rateLimit.allowed) {
      const minutesRemaining = Math.ceil((rateLimit.resetTime - Date.now()) / (60 * 1000));
      setModalMessage(`Too many requests. Please wait ${minutesRemaining} minute${minutesRemaining > 1 ? 's' : ''} before trying again.`);
      setModalType('error'); setBtnType('Ok'); setModalVisible(true); setRateLimitRemaining(0);
      return;
    }
    setRateLimitRemaining(rateLimit.remaining);
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setModalMessage('Please check your inputs and try again.');
      setModalType('error'); setBtnType('Retry'); setModalVisible(true);
      return;
    }
    setIsSubmitting(true); setErrors({});
    const sanitizedFormData = {
      name: sanitizeName(formData.name),
      email: sanitizeEmail(formData.email),
      message: sanitizeMessage(formData.message, 5000),
    };
    if (!sanitizedFormData.name || !sanitizedFormData.email) {
      setErrors({ name: 'Invalid input detected', email: 'Invalid input detected' });
      setModalMessage('Invalid input detected. Please check your entries.');
      setModalType('error'); setBtnType('Retry'); setModalVisible(true); setIsSubmitting(false);
      return;
    }
    try {
      const response = await axios.post('/api/contact', sanitizedFormData);
      if (response.status === 200) {
        setModalMessage("Thank you for contacting me! I'll get back to you as soon as possible.");
        setModalType('success'); setModalVisible(true); setBtnType('Ok');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      setModalMessage(
        axios.isAxiosError(error) && !error.response
          ? 'Please check your internet connection and try again.'
          : 'An error occurred. Please try again later.'
      );
      setModalType('error'); setBtnType('Retry'); setModalVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-slate-900/20 ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : formData[field]
        ? 'border-slate-300 bg-white'
        : 'border-slate-200 bg-white'
    }`;

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={inputClass('name')}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
            aria-required="true"
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className={inputClass('email')}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={254}
            aria-required="true"
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Message
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-slate-900/20 resize-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            maxLength={5000}
            disabled={isSubmitting}
          />
          <p className="mt-1 text-xs text-slate-400">Tell me about your project or just say hello!</p>
        </div>

        <button
          type="submit"
          className="btn_primary w-full py-3.5 rounded-xl text-sm font-semibold"
          disabled={isSubmitting || (rateLimitRemaining !== null && rateLimitRemaining === 0)}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner size={18} /> Sending...
            </span>
          ) : rateLimitRemaining === 0 ? 'Rate Limit Exceeded' : 'Send Message'}
        </button>

        {rateLimitRemaining !== null && rateLimitRemaining > 0 && rateLimitRemaining < 3 && (
          <p className="text-xs text-slate-400 text-center">
            {rateLimitRemaining} attempt{rateLimitRemaining !== 1 ? 's' : ''} remaining
          </p>
        )}
      </form>

      <Alert
        show={modalVisible}
        handleClose={() => setModalVisible(false)}
        message={modalMessage}
        type={modalType}
        actionBtn={btnType}
      />
    </>
  );
};

export default ContactForm;
