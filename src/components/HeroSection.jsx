import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <Sparkles size={16} className="text-accent" />
            <span>Biểu tượng của sự hoàn mỹ</span>
          </div>
          
          <h1 className="hero-title animate-fade-up delay-100">
            Kiến Tạo Không Gian <br />
            <span className="text-gradient">Đẳng Cấp</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-up delay-200">
            PK Door tự hào mang đến chất lượng thi công phần thô vững chắc nhất, 
            kết hợp nghệ thuật kiến trúc và kỹ thuật thi công vượt thời gian.
          </p>
          
          <div className="hero-actions animate-fade-up delay-300">
            <Link to="/quote" className="btn btn-glow">
              Nhận Tư Vấn <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="btn btn-outline hero-btn-outline">
              Khám Phá Dự Án
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
