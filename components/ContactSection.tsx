'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { Links } from '@/data/links';
import Link from 'next/link';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = {
      access_key: '6c14b370-ac51-45bc-b933-1a3ed381b3d1',
      ...formData,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Submission failed');

      toast.success('Message Sent', {
        description: 'Thank you for your message. Please wait.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      toast.error('Error', {
        description: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='py-8 bg-background'>
      <div className='section-container'>
        <h2 className='section-heading'>Get In Touch</h2>
        <p className='text-muted-foreground max-w-2xl mb-12'>
          Have a question or want to work together? Feel free to drop me a
          message. I &apos;d love to hear from you! {/* Escaped 'I'd' */}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-1 space-y-8'>
            <div>
              <h3 className='text-lg font-semibold mb-3 text-foreground'>
                Contact Information
              </h3>
              <p className='text-muted-foreground'>
                Fill up the form and I&apos;ll get back to you as soon as
                possible.{' '}
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <Mail className='w-5 h-5 mt-1 text-primary' />
                <div>
                  <h4 className='font-medium text-foreground'>Email</h4>
                  <p className='text-sm text-muted-foreground'>
                    <Link href={`mailto:${Links.emailonly}`}>
                      {Links.emailonly}
                    </Link>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <Phone className='w-5 h-5 mt-1 text-primary' />
                <div>
                  <h4 className='font-medium text-foreground'>Phone</h4>
                  <p className='text-sm text-muted-foreground'>
                    <Link href={`tel:${Links.phone}`}>{Links.phone}</Link>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 mt-1 text-primary' />
                <div>
                  <h4 className='font-medium text-foreground'>Location</h4>
                  <p className='text-sm text-muted-foreground'>
                    {Links.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-3 text-foreground'>
                Connect with me
              </h3>
              <div className='flex space-x-4'>
                <Link
                  href={Links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  className='bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Github size={20} />
                </Link>
                <Link
                  href={Links.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  className='bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Linkedin size={20} />
                </Link>

                <Link
                  href={Links.email}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Email'
                  className='bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className='md:col-span-2'>
            <form
              className='space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border'
              onSubmit={handleSubmit}
            >
              <input
                type='hidden'
                name='access_key'
                value='6c14b370-ac51-45bc-b933-1a3ed381b3d1'
              />
              <input
                type='hidden'
                name='redirect'
                value='https://web3forms.com/success'
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium text-foreground'
                  >
                    Your Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='John Doe'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-foreground'
                  >
                    Your Email
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='john@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='subject'
                  className='text-sm font-medium text-foreground'
                >
                  Subject
                </label>
                <Input
                  id='subject'
                  name='subject'
                  placeholder='How can I help you?'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor='message'
                  className='text-sm font-medium text-foreground'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='Your message here...'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type='submit' className='w-full' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
