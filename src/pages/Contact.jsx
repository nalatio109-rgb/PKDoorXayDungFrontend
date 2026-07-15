import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-wrapper pt-20">
      <SEO title="Liên Hệ" />
      <div className="container py-16">
        <SectionHeading title="Liên Hệ Với Chúng Tôi" subtitle="Hỗ trợ 24/7" />
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '3rem' }}>
          <div style={{ flex: '1 1 400px' }} className="animate-slide-right">
            <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>Hãy gửi tin nhắn cho chúng tôi</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Nếu bạn có bất kỳ thắc mắc hay yêu cầu nào, đừng ngần ngại liên hệ. Đội ngũ PK Door sẽ phản hồi sớm nhất.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Họ và tên" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontFamily: 'var(--font-sans)' }} required />
              </div>
              <div>
                <input type="email" placeholder="Email" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontFamily: 'var(--font-sans)' }} required />
              </div>
              <div>
                <textarea placeholder="Nội dung tin nhắn" rows="5" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontFamily: 'var(--font-sans)', resize: 'vertical' }} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: 'max-content' }}>
                <Send size={18} /> Gửi Tin Nhắn
              </button>
            </form>
          </div>
          
          <div style={{ flex: '1 1 400px' }} className="animate-slide-left">
            <div style={{ width: '100%', height: '100%', minHeight: '400px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.110234479361!2d108.21408891485854!3d16.05976368888719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zTmd1eeG7hW4gVsSDbiBMaW5oLCDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" 
                width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
