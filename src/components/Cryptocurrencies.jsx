import React, { useState, useEffect } from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input, Avatar, title} from 'antd';
import { useGetCryptosQuery } from '../services/coinrankingApi';

const Cryptocurrencies = ({ simplified }) => {
  const counter = simplified?10:100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(counter);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  
    const filteredData = cryptosList ?.data ?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  }, [ cryptosList, searchTerm]);
  

  

if (!cryptos) {
  return null; // Or you can render a loading state or an error message
}

return (
  <>
  {!simplified && (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
    <Input placeholder="Search Cryptocurrency"  style={{ width: '200px', textAlign: 'center' }} onChange={(e) => setSearchTerm(e.target.value )} />
  </div>

  )}
  
    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-cards" key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`} // Dynamic title using template literals
              extra={<Avatar className="crypto-image" src={currency.iconUrl} />}
              hoverable
            >
              <p>
                Price: {millify(currency.price)} USD
              </p>
              <p>
                Market Cap: {millify(currency.marketCap)}
              </p>
              <p>
                Daily Change: {millify(currency.change)}%
              </p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </>
);

}

export default Cryptocurrencies