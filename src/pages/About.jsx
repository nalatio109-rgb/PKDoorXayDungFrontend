import React from 'react';
import SEO from '../components/SEO';
import { Compass, Eye, Target, CheckCircle2, ShieldCheck, Banknote, Clock, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-wrapper pt-20">
      <SEO title="Giới Thiệu" />

      {/* Premium Minimalist Hero */}
      <section className="section" style={{ backgroundColor: 'var(--background)', padding: '6rem 0 4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', display: 'block', marginBottom: '1rem' }}>Về Chúng Tôi</span>
            <h1 style={{ color: 'var(--primary-dark)', fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Kiến Tạo Không Gian<br />Nâng Tầm Cuộc Sống
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
              Xây Dựng Nhà Đà Nẵng tự hào là đơn vị thi công uy tín, mang đến giải pháp toàn diện từ thiết kế đến hoàn thiện cho mọi công trình.
            </p>
          </div>
        </div>
      </section>

      {/* Story / Thư Ngỏ (2 Columns: Text + Image) */}
      <section className="section" style={{ padding: '2rem 0 6rem 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left Image Stack */}
            <div className="animate-fade-up" style={{ position: 'relative', height: '600px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-float)' }}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Công trình thực tế" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', backgroundColor: 'var(--surface)', padding: '1.5rem 2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '900', marginBottom: '0.2rem', lineHeight: 1 }}>10+</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Năm Kinh Nghiệm</p>
              </div>
            </div>

            {/* Right Text */}
            <div className="animate-fade-up delay-100">
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                Xây dựng tổ ấm vững chãi qua thời gian
              </h2>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: '500', fontStyle: 'italic', borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
                  "Cả đời người có khi chỉ xây nhà một lần. Ngôi nhà không chỉ là tài sản tích cóp bao năm, mà còn là tổ ấm, là nơi bão dừng sau cánh cửa."
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Thay mặt toàn thể cán bộ nhân viên <strong>Công Ty TNHH Xây Dựng Nhà Đà Nẵng</strong>, chúng tôi xin gửi lời chào trân trọng và lời chúc sức khỏe, thành công đến Quý vị.
                </p>
                <p style={{ marginBottom: '0' }}>
                  Thấu hiểu trăn trở của những người đi xây nhà, chúng tôi ra đời với sứ mệnh đồng hành cùng gia chủ. Biến bản vẽ trên giấy thành hiện thực vững chãi, gánh vác mọi âu lo để bạn an tâm tận hưởng niềm vui đón nhà mới. 
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values - Clean Grid */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>Nền Tảng</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-dark)' }}>Giá Trị Cốt Lõi</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div className="animate-fade-up" style={{ backgroundColor: 'var(--surface)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--surface-alt)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Compass size={36} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Tầm Nhìn</h4>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>
                Trở thành thương hiệu thi công xây dựng số 1 tại miền Trung. Đặt chuẩn mực mới về độ an toàn và sự hoàn mỹ trong kiến trúc.
              </p>
            </div>

            {/* Card 2 */}
            <div className="animate-fade-up delay-100" style={{ backgroundColor: 'var(--surface)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', textAlign: 'center', transform: 'translateY(-1rem)' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--primary-dark)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: 'var(--shadow-float)' }}>
                <Target size={36} color="#FFFFFF" />
              </div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Sứ Mệnh</h4>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>
                Kiến tạo "Tổ ấm" đích thực. Tối ưu hóa chi phí đầu tư cho gia chủ nhưng không bao giờ thỏa hiệp với chất lượng kỹ thuật.
              </p>
            </div>

            {/* Card 3 */}
            <div className="animate-fade-up delay-200" style={{ backgroundColor: 'var(--surface)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--surface-alt)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <HardHat size={36} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Kỷ Luật</h4>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>
                Tuyệt đối tuân thủ quy chuẩn kỹ thuật và an toàn lao động. Cam kết hoàn thành đúng tiến độ đã thỏa thuận.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Commitments - Elegant List Style */}
      <section className="section" style={{ padding: '6rem 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div className="animate-fade-up">
              <span style={{ color: 'var(--accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>An Tâm Tuyệt Đối</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '2rem', lineHeight: '1.2' }}>
                4 Cam Kết Vàng<br />Dành Cho Gia Chủ
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="hover-slide-right" style={{ display: 'flex', gap: '1.5rem', cursor: 'default' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <div className="icon-box" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Banknote size={24} color="var(--accent)" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Minh Bạch Báo Giá</h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: 0 }}>Ký hợp đồng là chốt giá, dự toán chi tiết từng viên gạch. Tuyệt đối 0 phát sinh chi phí ẩn.</p>
                  </div>
                </div>

                <div className="hover-slide-right" style={{ display: 'flex', gap: '1.5rem', cursor: 'default' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <div className="icon-box" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={24} color="var(--accent)" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Vật Tư Chính Hãng</h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: 0 }}>Sử dụng đúng chủng loại cam kết (Thép Hòa Phát, Xi măng Sông Gianh). Sai 1 đền 10.</p>
                  </div>
                </div>

                <div className="hover-slide-right" style={{ display: 'flex', gap: '1.5rem', cursor: 'default' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <div className="icon-box" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={24} color="var(--accent)" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Thi Công Đúng Hẹn</h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: 0 }}>Kỹ sư giám sát hằng ngày, cập nhật tiến độ liên tục. Đảm bảo bàn giao nhà đúng ngày đẹp.</p>
                  </div>
                </div>

                <div className="hover-slide-right" style={{ display: 'flex', gap: '1.5rem', cursor: 'default' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <div className="icon-box" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldCheck size={24} color="var(--accent)" />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Bảo Hành Dài Hạn</h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: 0 }}>Bảo hành kết cấu lên đến 10 năm. Bảo trì nhanh chóng 24/7, gọi là có mặt ngay lập tức.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-200 img-float" style={{ position: 'relative', height: '100%', minHeight: '500px', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Thiết kế đẳng cấp" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section Minimal */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ backgroundColor: 'var(--primary-dark)', borderRadius: 'var(--radius-xl)', padding: '4rem 2rem', textAlign: 'center', color: '#fff', backgroundImage: 'linear-gradient(to right, var(--primary-dark), var(--primary))' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: '#fff' }}>Bắt Đầu Dự Án Của Bạn</h2>
            <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
              Liên hệ ngay để nhận tư vấn chuyên sâu và bản dự toán chi tiết hoàn toàn miễn phí từ đội ngũ chuyên gia của chúng tôi.
            </p>
            <Link to="/contact" className="btn" style={{ backgroundColor: '#fff', color: 'var(--primary-dark)', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Nhận Tư Vấn Ngay <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
