import React from 'react';
import { Select, Row, Col, Avatar, Card, Typography } from 'antd';
import moment from 'moment';


import { useGetCryptoNewsQuery } from '../services/coinNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
  console.log(simplified)
   const counter = simplified ? 6 : 12;
   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', counter});



  return (
    <Row gutter={[ 24, 24 ]}>
      {cryptoNews?.value?.map((news, i) => {
        if(i < counter)
        return (
          <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable classname="news-card" > 
          <a href={news.url} target=" blank " rel="noreferrer">
            <div className="news-image-container">
              <p className="news-title" level={4}>
                {news.name}
              </p>

            </div>

          </a>

          </Card>
        </Col>
        )

      })}
      
       

    </Row>
  )
}

export default News