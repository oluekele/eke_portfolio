'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import {
  Loader2,
  Send,
  
} from 'lucide-react';

import { FaTimes } from 'react-icons/fa';
import useContactStore from '@/store/useCounterStore';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;




const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setContact } = useContactStore();

  const validateConfig = () => {
    if (!serviceId || !templateId || !publicKey) {
  // throw new Error("Missing or invalid EmailJS config values.");

      toast.error('Email service is not properly configured.');
      console.error('Missing or invalid EmailJS config values.');
      return false;
    }
    return true;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSubmitting) return;

    const formData = new FormData(form.current);
    const name = formData.get('your_name')?.toString().trim();
    const email = formData.get('your_email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      toast.warning('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning('Please enter a valid email address.');
      return;
    }

    if (!validateConfig()) return;

    try {
      setIsSubmitting(true);
      const result = await emailjs.sendForm(
       serviceId as string,
        templateId as string,
        form.current,
        publicKey
      );

      toast.success('Message sent successfully!');
      form.current.reset();
      console.log('EmailJS success:', result.text);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-10 px-6 bg-white  w-4/5 relative md:w-3/5 rounded-2xl shadow-2xl z-50 transition-transform duration-300 mx-auto ">
      <div className='absolute top-4 right-6 text-2xl z-60 text-black cursor-pointer' onClick={()=> setContact(false)}>
        <FaTimes/>
      </div>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1  gap-12 items-start">

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have a project in mind or want to discuss an opportunity? Fill out the form or reach out via email. Let&apos;s build something great together!
            </p>

          </div> 

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center md:text-left">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <Input
                  className='!py-6'
                  type="text"
                  name="your_name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  className='!py-6'
                  name="your_email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={20}
                  className='w-full h-28 resize-none overflow-hidden overflow-y-auto '
                  required
                  disabled={isSubmitting}
                />
                <Button type="submit" className="w-full !py-6 cursor-pointer" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Submit Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
