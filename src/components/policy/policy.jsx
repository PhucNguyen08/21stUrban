import classNames from 'classnames/bind';
import styles from './policy.module.scss';

const cx = classNames.bind(styles);

export default function Policy() {
  return (
    <div className={cx('wrapper')}>
      <h4 className={cx('title')}>Chính sách đổi hàng:</h4>
      <ol className={cx('list')}>
        <li>
          <h4 className={cx('name')}>Đối tượng và thời hạn đổi hàng</h4>
          <ul className={cx('info')}>
            <li>
              <p>
                Áp dụng cho khách hàng thanh toán đầy đủ khi mua trực tiếp và
                mua online tại website: https://mlb-korea.com.vn/.
              </p>
            </li>
            <li>
              <p>
                Phạm vi sản phẩm được đổi: Sản phẩm đúng giá trị và sản phẩm
                giảm giá không quá 30%.
              </p>
            </li>
            <li>
              <p>
                Thời hạn đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận
                được sản phẩm.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className={cx('name')}>Trường hợp đổi hàng</h4>
          <ul className={cx('info')}>
            <li>
              <p>
                Phát sinh lỗi từ phía cửa hàng, nhà sản xuất, lỗi sản phẩm,...
                <span>
                  (MLB Việt Nam sẽ thanh toán chi phí vận chuyển đến khách
                  hàng).
                </span>
              </p>
            </li>
            <li>
              <p>
                Phát sinh từ nhu cầu của khách hàng.
                <span>
                  (Khách hàng sẽ thanh toán chi phí vận chuyển hàng hóa tới MLB
                  Việt Nam và đổi về).
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className={cx('name')}>Nội dung chính sách đổi hàng</h4>
          <ul className={cx('info')}>
            <li>
              <p>
                Sản phẩm đạt yêu cầu đổi phải chưa qua sử dụng cũng như chưa
                giặt/ ủi/ là, không có mùi lạ, nguyên nhãn mác, chưa cào mã (nếu
                có), hộp/ bao bì sản phẩm đi kèm (nếu có).
              </p>
            </li>
            <li>
              <p>
                Sản phẩm không bị lỗi do quá trình lưu giữ, vận chuyển của người
                sử dụng.
              </p>
            </li>
            <li>
              <p>Khách hàng có chứng từ mua hàng đầy đủ tại MLB Việt Nam.</p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className={cx('name')}>Quy định tiếp nhận và xử lý đổi hàng</h4>
          <ul className={cx('info')}>
            <li>
              <p>
                *** Đối với khách hàng mua trực tiếp tại cửa hàng thì sẽ đến tại
                chính cửa hàng đó để đổi hàng.
              </p>
              <p>
                *** Đối với khách hàng mua online tại website:
                https://mlb-korea.com.vn/. :
              </p>
            </li>
            <li>
              <p>Khách hàng liên hệ hotline hoặc gmail yêu cầu đổi hàng.</p>
            </li>
            <li>
              <p>
                Khách hàng gửi sản phẩm có nhu cầu đổi về địa chỉ được cung cấp
                bởi CSKH như đã trao đổi.
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
