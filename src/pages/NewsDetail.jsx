import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calendar, ArrowLeft, User } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();

  // Mock data for news, ideally this would be fetched from an API or shared state
  const allNews = [
    { 
        id: '1', 
        category: "Tin Tức", 
        title: "Bảng báo giá thi công phần thô tại Đà Nẵng mới nhất 2026", 
        date: "12/07/2026", 
        excerpt: "Cập nhật chi tiết chi phí nhân công và vật tư xây dựng phần thô (cát, đá, xi măng, sắt thép) tại khu vực miền Trung.", 
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>Việc nắm rõ bảng báo giá thi công phần thô là vô cùng quan trọng đối với các chủ đầu tư đang có ý định xây nhà tại Đà Nẵng. Trong năm 2026, thị trường vật liệu xây dựng và nhân công có những biến động nhất định.</p>
            <h3>1. Giá nhân công xây dựng</h3>
            <p>Giá nhân công xây dựng phần thô tại Đà Nẵng hiện nay dao động từ 1.500.000 VNĐ đến 1.800.000 VNĐ/m2, tùy thuộc vào độ phức tạp của bản vẽ thiết kế và điều kiện thi công thực tế.</p>
            <h3>2. Giá vật tư phần thô</h3>
            <p>Vật tư phần thô bao gồm: Cát, đá, xi măng, sắt thép, gạch, ống nước, dây điện... Việc lựa chọn thương hiệu vật tư sẽ quyết định phần lớn đến tổng chi phí. Chúng tôi khuyên bạn nên sử dụng các vật tư từ những thương hiệu uy tín để đảm bảo chất lượng công trình.</p>
            <p>Để nhận được báo giá chi tiết và chính xác nhất cho công trình của bạn, hãy liên hệ ngay với Xây Dựng Nhà Đà Nẵng để được tư vấn miễn phí.</p>
        `
    },
    { 
        id: '2', 
        category: "Kinh Nghiệm", 
        title: "Kinh nghiệm chọn vật liệu xây dựng tiết kiệm chi phí", 
        date: "05/07/2026", 
        excerpt: "Làm thế nào để xây phần thô với ngân sách hợp lý mà vẫn đảm bảo độ vững chắc? Dưới đây là những mẹo hay từ kỹ sư kết cấu của Xây Dựng Nhà Đà Nẵng.", 
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>Chi phí xây dựng phần thô thường chiếm khoảng 60% tổng chi phí xây dựng một ngôi nhà. Vì vậy, việc tiết kiệm chi phí phần thô mà không làm giảm chất lượng công trình là bài toán khiến nhiều chủ đầu tư đau đầu.</p>
            <h3>Ưu tiên sử dụng vật liệu địa phương</h3>
            <p>Sử dụng vật liệu có sẵn tại địa phương như cát, đá, gạch... sẽ giúp bạn tiết kiệm được một khoản đáng kể chi phí vận chuyển.</p>
            <h3>Tính toán kỹ lượng vật tư cần thiết</h3>
            <p>Việc tính toán chính xác lượng vật tư cần thiết sẽ giúp tránh tình trạng mua thừa gây lãng phí hoặc mua thiếu làm gián đoạn quá trình thi công.</p>
        `
    },
    { 
        id: '3', 
        category: "Sự Kiện", 
        title: "Lễ cất nóc dự án Biệt Thự Vườn tại Cẩm Lệ", 
        date: "28/06/2026", 
        excerpt: "Một cột mốc quan trọng trong tiến độ dự án, hoàn thành xong toàn bộ phần khung sườn bê tông cốt thép bởi đội ngũ Xây Dựng Nhà Đà Nẵng.", 
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>Ngày 28/06/2026 vừa qua, Xây Dựng Nhà Đà Nẵng đã tổ chức thành công lễ cất nóc dự án Biệt Thự Vườn tại quận Cẩm Lệ, đánh dấu việc hoàn thành toàn bộ phần khung sườn bê tông cốt thép.</p>
            <p>Dự án có quy mô 3 tầng với phong cách thiết kế hiện đại, hòa hợp với thiên nhiên. Lễ cất nóc diễn ra trong không khí trang trọng với sự tham gia của đại diện chủ đầu tư và ban lãnh đạo công ty.</p>
            <p>Sự kiện này không chỉ là một cột mốc quan trọng trong quá trình thi công mà còn khẳng định năng lực và uy tín của Xây Dựng Nhà Đà Nẵng trong việc thực hiện các dự án quy mô lớn, đòi hỏi kỹ thuật cao.</p>
        `
    },
  ];

  const newsItem = allNews.find(item => item.id === id) || allNews[0];
  const relatedNews = allNews.filter(item => item.id !== newsItem.id).slice(0, 2);

  return (
    <div className="page-wrapper pt-20">
      <SEO title={newsItem.title} />
      
      <div className="container py-16">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/news" className="back-link mb-4">
            <ArrowLeft size={18} /> Quay lại danh sách
          </Link>
          
          <div style={{ marginBottom: '2.5rem', marginTop: '2rem' }}>
            <span className="news-badge" style={{ display: 'inline-block', marginBottom: '1.5rem', position: 'static' }}>{newsItem.category}</span>
            <h1 style={{ fontSize: '3rem', color: 'var(--primary-dark)', lineHeight: '1.2', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              {newsItem.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '1rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} /> <span>{newsItem.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={18} /> <span>Admin - Xây Dựng Nhà Đà Nẵng</span>
              </div>
            </div>
          </div>
          
          <img 
            src={newsItem.img} 
            alt={newsItem.title} 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', boxShadow: 'var(--shadow-float)', objectFit: 'cover' }} 
          />
          
          <div 
            className="news-content"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="related-news-section">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '2rem', fontWeight: '800' }}>Bài viết liên quan</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {relatedNews.map((item, idx) => (
                  <Link to={`/news/${item.id}`} key={idx} className="news-card">
                    <div className="news-img-wrap" style={{ height: '200px' }}>
                      <span className="news-badge">{item.category}</span>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)', lineHeight: '1.4', fontWeight: '800' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
