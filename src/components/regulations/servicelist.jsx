import classNames from 'classnames/bind';
import styles from './servicelist.module.scss';
import Box from '@/assets/image/box.jpg';
import Pay from '@/assets/image/pay.jpg';
import Money from '@/assets/image/money.jpg';
import Support from '@/assets/image/support.jpg';
import ServiceItem from './serviceitem';
import { Row, Col } from 'antd';

const cx = classNames.bind(styles);

export default function ServiceList() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Row gutter={[0, { xs: 16, sm: 16, md: 16, lg: 16 }]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <ServiceItem
              image={Box}
              heading="Free Shipping"
              resolution="Tell about your service"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <ServiceItem
              image={Money}
              heading="Money Guarantee"
              resolution="Within 30 days for an exchange"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <ServiceItem
              image={Support}
              heading="Online Support"
              resolution="24 hours a day, 7 days a week"
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <ServiceItem
              image={Pay}
              heading="Flexible Payment"
              resolution="Pay with Multiple Credit Cards"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
