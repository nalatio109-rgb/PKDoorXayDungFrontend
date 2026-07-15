import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <div className="page-wrapper pt-20">
      <SEO title="Giới Thiệu" />
      <div className="bg-background py-16">
        <div className="container">
          <SectionHeading title="Về PK Door" subtitle="Lịch sử & Sứ mệnh" />
          <div className="glass p-8 rounded-xl shadow-md mt-10 animate-slide-up" style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)' }}>
            <p className="text-light mb-4">
              Được thành lập với tâm huyết kiến tạo nên những không gian sống và làm việc hoàn hảo, PK Door đã không ngừng nỗ lực để trở thành một trong những nhà thầu thi công phần thô hàng đầu tại Đà Nẵng và Quảng Nam.
            </p>
            <p className="text-light mb-4">
              Với sứ mệnh mang lại tổ ấm vững chắc, chúng tôi thấu hiểu điều kiện khí hậu, thổ nhưỡng của miền Trung để đưa ra những giải pháp thiết kế và thi công phù hợp nhất. Từ những ngôi nhà cấp 4 hiện đại đến các căn biệt thự sang trọng.
            </p>
            <h3 className="mt-8 mb-4 text-primary">Tầm Nhìn & Sứ Mệnh</h3>
            <p className="text-light mb-4">
              <strong>Tầm nhìn:</strong> Trở thành đơn vị tiên phong trong lĩnh vực thi công phần thô và kết cấu xây dựng uy tín nhất tại miền Trung.
            </p>
            <p className="text-light">
              <strong>Sứ mệnh:</strong> Mang lại bộ khung vững chắc nhất cho tổ ấm của bạn, tối ưu hóa chi phí nhân công và vật tư phần thô.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
