import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      {
        itemsData.length ? (
          itemsData.map((item, index) => {
            return (
              <Zoom clear>
                <Col key={index} sm='12' className='mb-3'>

                  <Card className='d-flex flex-row' style={{ backgroundColor: "transparent" }}>
                    <Card.Img className='img-item' variant="top" src={item.imgUrl} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between'>
                        <div className="item-title">
                          {item.title}
                        </div>
                        <div className="item-price">
                          {item.price}
                        </div>
                      </Card.Title>
                      <Card.Text className='py-2'>
                        <div className="item-description">
                          {item.description}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Zoom >
            )

          })

        )
          :
          <h3 className='text-center alert alert-danger'>لا يوجد أصناف</h3>
      }
    </Row>
  )
}

export default ItemsList