import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';


const Category = ({ allCategory, filterbyCategory }) => {

  // To filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat)
  }
  return (
    <Row className='my-2 mb-5'>
      <Col sm='12' className='d-flex justify-content-center px-2 media'>
        {
          allCategory.map((cat, index) => {
            return (
              <div key={index}>
                <Flip right>
                  <button onClick={() => onFilter(cat)} className="btn mx-2">{cat}</button>
                </Flip>
              </div>
            )
          })
        }
      </Col>
    </Row>
  )
}

export default Category