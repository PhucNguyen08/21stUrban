import Image from 'next/image';
import Intro1 from '@/assets/image/intro-1.jpg';
import Intro2 from '@/assets/image/intro-2.jpg';
import Wrapper from '../ui/wrapper';
import classNames from 'classnames/bind';
import styles from './recommend.module.scss';

const cx = classNames.bind(styles);

export default function Recommend() {
  return (
    <Wrapper>
      <div className={cx('container')}>
        <h3 className={cx('title')}>Giới Thiệu</h3>
        <div className={cx('article')}>
          <p>
            <span>Major League Baseball</span>(
            <strong className={cx('brand')}>MLB</strong>) là tổ chức thể thao
            chuyên nghiệp của môn bóng chày và cũng là tổ chức lâu đời nhất
            trong 4 liên đoàn thể thao chuyên nghiệp chính ở Hoa Kỳ và Canada.
          </p>
          <p>
            Trong lĩnh vực thời trang, nhờ việc sản xuất những trang phục và phụ
            kiện cho những đội tuyển bóng chày thuộc tổ chức này, MLB đã có được
            những thành công lớn khi thuyết phục được những tín đồ đam mê bóng
            chày trên toàn nước Mỹ, Canada và Hàn Quốc. Không những vậy, những
            dòng sản phẩm này cũng có tầm ảnh hưởng và có một vị trí nhất định
            trong làng thời trang thế giới. Và dòng{' '}
            <strong>sản phẩm MLB</strong> Big Ball Chunky chính là một minh
            chứng rõ ràng cho độ “hot” của MLB.
          </p>
          <div className={cx('article-img')}>
            <Image src={Intro1} className={cx('img')} alt="Image" />
          </div>
          <p>
            Hầu hết các sản phẩm thời trang của hãng đều nhắm vào đối tượng khác
            hàng là giới trẻ, yêu thích sự cá tính cùng những kiểu phối đồ mang
            đậm phong cách thời trang đường phố phá cách, độc đáo. Vì sở hữu
            ngôn ngữ thiết kế khác biệt, mang nhiều nét cách tân sáng tạo trên
            từng sản phẩm nên hầu hết các mẫu sản phẩm của hãng đều được cộng
            đồng yêu thời trang đón nhận một cách nồng nhiệt.
          </p>
          <div className={cx('article-img')}>
            <Image src={Intro2} className={cx('img')} alt="Image" />
          </div>
          <p>
            Trong những năm gần đây <strong>MLB Korea</strong> đang rất phát
            triển và nổi tiếng trong cộng đồng thời trang nhờ những thiết kế
            hiện đại và đẹp mắt, cùng chất liệu cao cấp và ăn đứt nhiều hãng
            khác về mặt giá tiền với cùng chất liệu đó, và tất nhiên, giày{' '}
            <strong>MLB</strong> cũng là một trong những phụ kiện thời trang
            được săn đón rất nhiều khi nhắc đến phong cách thời trang đường phố.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
