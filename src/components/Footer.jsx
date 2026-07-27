import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', color: '#cbd5e1', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Company Info */}
          <div>
            <Link to="/" className="logo" style={{ color: 'var(--surface)', marginBottom: '1.5rem', display: 'inline-block' }}>
              Xây Dựng Nhà <span style={{ color: '#60A5FA' }}>Đà Nẵng</span>
            </Link>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Chuyên thi công phần thô, đổ móng và dựng khung kết cấu bê tông cốt thép tại Đà Nẵng và Quảng Nam.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.facebook.com/profile.php?id=61591060679431" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s', fontWeight: 'bold' }}>Facebook</a>
              <a href="#" style={{ color: '#cbd5e1', transition: 'color 0.3s', fontWeight: 'bold' }}>Instagram</a>
              <a href="#" style={{ color: '#cbd5e1', transition: 'color 0.3s', fontWeight: 'bold' }}>Youtube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--surface)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Liên Kết Nhanh</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ hover: { color: '#60A5FA' } }}>Về Chúng Tôi</Link></li>
              <li><Link to="/services" style={{ hover: { color: '#60A5FA' } }}>Dịch Vụ</Link></li>
              <li><Link to="/projects" style={{ hover: { color: '#60A5FA' } }}>Dự Án Tiêu Biểu</Link></li>
              <li><Link to="/news" style={{ hover: { color: '#60A5FA' } }}>Tin Tức & Sự Kiện</Link></li>
              <li><Link to="/quote" style={{ hover: { color: '#60A5FA' } }}>Nhận Báo Giá</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'var(--surface)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Thông Tin Liên Hệ</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} style={{ color: '#60A5FA', flexShrink: 0, marginTop: '0.25rem' }} />
                <span>Đà Nẵng, Quảng Nam</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={20} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <span>0905 943 679</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <span>contact@xaydungnhadanang.vn</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={20} style={{ color: '#60A5FA', flexShrink: 0, marginTop: '0.25rem' }} />
                <span>Thứ 2 - Thứ 7: 7:30 - 17:30<br/>Chủ Nhật: Nghỉ</span>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} Xây Dựng Nhà Đà Nẵng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
