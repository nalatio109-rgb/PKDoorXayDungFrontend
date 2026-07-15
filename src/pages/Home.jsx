import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';
import { Building2, Wrench, Home as HomeIcon, CheckCircle2, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Building2 size={32} className="text-accent" />,
      title: "Xây Dựng Dân Dụng",
      description: "Giải pháp toàn diện từ thiết kế đến thi công nhà phố, biệt thự với tiêu chuẩn khắt khe nhất."
    },
    {
      icon: <Wrench size={32} className="text-accent" />,
      title: "Sửa Chữa & Cải Tạo",
      description: "Biến không gian cũ thành kiệt tác mới, nâng tầm chất lượng sống và giá trị bất động sản."
    },
    {
      icon: <HomeIcon size={32} className="text-accent" />,
      title: "Thiết Kế Kiến Trúc",
      description: "Giao thoa giữa nghệ thuật và công năng, tạo nên những công trình mang đậm dấu ấn cá nhân."
    }
  ];

  return (
    <div className="page-wrapper">
      <SEO 
        title="Trang Chủ" 
        description="PK Door - Vững chắc từ nền móng. Chuyên thi công phần thô, khung kết cấu nhà tại Đà Nẵng."
      />
      
      <HeroSection />

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <SectionHeading 
            title="Dịch Vụ Tinh Hoa" 
            subtitle="Giải pháp của chúng tôi" 
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card-3d animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div style={{ 
                  width: '64px', height: '64px', 
                  borderRadius: 'var(--radius-md)', 
                  backgroundColor: 'var(--primary-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: '0 10px 20px rgba(10,37,64,0.2)'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.05rem' }}>{service.description}</p>
                <Link to="/services" style={{ 
                  color: 'var(--primary)', 
                  fontWeight: '700', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Khám phá <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="section" style={{ backgroundColor: 'var(--primary-dark)', color: '#fff', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 500px', position: 'relative' }} className="animate-fade-up">
            {/* Asymmetric Grid Image Layout */}
            <div style={{ position: 'relative', height: '600px', width: '100%' }}>
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Công trình" 
                style={{ position: 'absolute', top: 0, left: 0, width: '70%', height: '70%', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)', zIndex: 2 }}
              />
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Nội thất" 
                style={{ position: 'absolute', bottom: 0, right: 0, width: '60%', height: '60%', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)', zIndex: 3 }}
              />
              <div style={{ position: 'absolute', top: '10%', right: '5%', width: '150px', height: '150px', backgroundColor: 'var(--accent)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 1, opacity: 0.5 }}></div>
            </div>
          </div>

          <div style={{ flex: '1 1 400px' }} className="animate-fade-up delay-200">
            <SectionHeading 
              title="Khởi Nguồn Của Những Kiệt Tác" 
              subtitle="Về PK Door"
              dark={true}
              className="mb-0"
            />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.15rem', marginTop: '2rem' }}>
              Hơn một thập kỷ qua, PK Door không chỉ xây dựng những ngôi nhà, chúng tôi kiến tạo những bộ khung vững chắc nhất cho mọi công trình. Chúng tôi tập trung 100% vào phần thô và kết cấu bê tông cốt thép.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {['Vật liệu tuyển chọn khắt khe nhất', 'Đội ngũ chuyên gia hàng đầu ngành', 'Cam kết tiến độ và chất lượng tuyệt đối'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(0,212,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 color="var(--accent)" size={16} />
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              Hồ Sơ Năng Lực
            </Link>
          </div>
          
        </div>
      </section>
      
      {/* Quick CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
        <div className="container text-center animate-fade-up">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>Sẵn sàng cho dự án tiếp theo?</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Biến bản vẽ kỹ thuật thành hiện thực vững chắc với sự đồng hành của các kỹ sư kết cấu từ PK Door.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Link to="/quote" className="btn btn-primary">Bắt Đầu Ngay</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
