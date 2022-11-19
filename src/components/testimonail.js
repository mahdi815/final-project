import Carousel from 'react-bootstrap/Carousel';

function Testimonail () {
  return (
    <Carousel fade className='carouu'>


      <Carousel.Item>
      <img  src="/photos/background.jpg" alt="first slide" className='bgimg'/>
        <Carousel.Caption>
          <h3>TESTIMONAIL</h3>
          <p className='paratesti'>Nulla vitae elit libero, a pharetra vitae elit libero augue mollis interdum.Nulla Nulla vitae elit libero vitae elit libero, a pharetra augue Nulla vitae elit libero Nulla vitae elit libero,nihil delectus non see lel um ad eo la SRM er ae adie bt eS ests elit a pharetra augue mollis interdum</p>
          <div class="row justify-content-center " width="200px">
                <div class="col-4">
                    <img src="/photos/testi2.jpg" className='imagou' alt="Contac tUs" height="50px" width="60px"></img>
                </div>
                <div class="col-5">
                    <p className='sideimagou'>
                        Nicolas.albert <br/>
                        pharetra augue mollis
                    </p>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img  src="/photos/background.jpg" alt="Second slide" className='bgimg'/>
        <Carousel.Caption>
            <h3>TESTIMONAIL</h3>
            <p className='paratesti'>Nulla vitae elit libero, a pharetra augue mollis vitae elit libero interdum.Nulla vitae elit libero, a pharetra augueNulla vitae elit libero mollis interdum Nulla vitae elit libero,nihil delectus non see lel um ad eo la SRM er ae adie bt eS ests elit a pharetra augue mollis interdum</p>
            <div class="row justify-content-center " width="200px">
                <div class="col-4">
                    <img src="/photos/testi1.jpg" className='imagou' alt="Contac tUs" height="50px" width="60px"></img>
                </div>
                <div class="col-5">
                    <p className='sideimagou'>
                        Nicolas.albert <br/>
                        pharetra augue mollis
                    </p>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img  src="/photos/background.jpg" alt="third slide" className='bgimg'/>
        <Carousel.Caption>
            <h3>TESTIMONAIL</h3>
            <p className='paratesti'>Nulla vitae elit libero, a pharetra augue mollis interdum vitae elit libero.Nulla vitae elit liberoNulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero,nihil delectus non see lel um ad eo la SRM er ae adie bt eS ests elit a pharetra augue mollis interdum</p>
            <div>

            <div class="row justify-content-center " width="200px">
                <div class="col-4">
                    <img src="/photos/testi3.jpg" className='imagou' alt="Contac tUs" height="50px" width="60px"></img>
                </div>
                <div class="col-5">
                    <p className='sideimagou'>
                        Nicolas.albert <br/>
                        pharetra augue mollis
                    </p>
                </div>
            </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonail;