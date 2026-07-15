import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { Calculator } from 'lucide-react';

const Quote = () => {
  return (
    <div className="page-wrapper pt-20">
      <SEO title="Báo Giá" />
      <div className="container py-16">
        <SectionHeading title="Yêu Cầu Báo Giá" subtitle="Dự toán chi phí" />
        
        <div className="glass mx-auto animate-slide-up" style={{ maxWidth: '800px', padding: '3rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Calculator size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>Điền thông tin dự án của bạn dưới đây, chúng tôi sẽ liên hệ lại kèm theo bảng dự toán chi tiết trong thời gian sớm nhất.</p>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Họ và tên *</label>
                <input type="text" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Số điện thoại *</label>
                <input type="tel" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} required />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Loại công trình</label>
                <select style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                  <option>Nhà phố</option>
                  <option>Biệt thự</option>
                  <option>Căn hộ</option>
                  <option>Văn phòng / Nhà xưởng</option>
                  <option>Khác</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Diện tích dự kiến (m2)</label>
                <input type="number" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} />
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mô tả thêm về yêu cầu</label>
              <textarea rows="4" style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: '1rem' }}>
              Gửi Yêu Cầu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
