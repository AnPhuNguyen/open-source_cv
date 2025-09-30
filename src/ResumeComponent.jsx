import React from 'react';
import './css/bootstrap.min.css';

const ResumeComponent = () => {
  return (  
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src=".\src\assets\image.png" alt="Profile" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
          <h1>Nguyễn An Phú</h1>
          <p className="text-muted">Sinh viên</p>
          <p><strong>☎</strong> +84123 456 7890 (temp phone) </p>
          <p><strong>✉</strong> ngtrucquynhmy@gmail.com (temp mail) </p>
          <p><strong>📅</strong> 12/10/2004</p>
          <p><strong>📍</strong> Thành phố Huế, Thừa Thiên Huế</p>
        </div>
        <div className="col-md-8">
          <div className="bg-light p-3 mb-4 rounded">
            <h2>MỤC TIÊU NGHỀ</h2>
            <p>Tôi hiện là sinh viên năm thứ tư của Trường Đại học Khoa học Huế, thuộc khoa Công nghệ thông tin</p>
          </div>
          <div className="bg-light p-3 mb-4 rounded">
            <h2>KINH NGHIỆM LÀM VIỆC</h2>
            <p><strong>2025 - nay</strong></p>
            <p><strong>thực tập sinh</strong></p>
            <p>Phụ trách việc lập kế hoạch và thực hiện các chiến dịch marketing nhằm tăng cường nhận thức thương hiệu, xây dựng mối quan hệ với khách hàng và thúc đẩy doanh số bán hàng. Tăng trưởng doanh thu 20% mỗi quý trong hai năm.</p>
          </div>
          <div className="bg-light p-3 mb-4 rounded">
            <h2>NGÔN NGỮ</h2>
            <p><strong>Tiếng Anh</strong> IELTS 6.5 (2022)</p>
            {/* <p><strong>Tiếng Trung</strong> ★★★</p> */}
          </div>
          {/* <div className="bg-light p-3 mb-4 rounded">
            <h2>HOẠT ĐỘNG</h2>
            <p>Tên vị trí: 01/2020 - nay</p>
            <p>Tổ chức các buổi quyên góp và hỗ trợ trẻ em mồ côi trên toàn quốc.</p>
          </div> */}
          <div className="bg-light p-3 mb-4 rounded">
            <h2>TIN HỌC</h2>
            <p><strong>Adobe Photoshop</strong> ★★★★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;