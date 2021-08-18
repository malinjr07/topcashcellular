import React from 'react'

function ProductDetails() {
    return (
        <section className="product section-padding">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="heading">
          <h4>
            iPhone 12 Pro Max (256GB)<span className="contexts"> Offer Price: $906.00</span>
            {/* <img src alt="" className="img-fluid" /> */}
          </h4>
        </div>
      </div>
    </div>
    <form action>
      <div className="row">
        <div className="col-xl-4">
          <div className="image">
            <img src="vendor/img/iphone.png" alt="iPhone" className="img-fluid" />
          </div>
        </div>
        <div className="col-xl-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="terms">
                <div className="title">
                  <h5>Please select your carrier</h5>
                </div>
                <div className="questions">
                  <ul className="answers">
                    <li className>
                      <input type="radio" name="carrier" id="at&t" />
                      <label className="options" htmlFor="at&t">
                        <div className="optImage">
                          <img src="./vendor/img/logo-at-t.png" className="img-fluid" alt="" />
                        </div>
                      </label>
                    </li>
                    <li className>
                      <input type="radio" name="carrier" id="sprint" />
                      <label className="options" htmlFor="sprint">
                        <div className="optImage">
                          <img src="./vendor/img/logo-sprint.png" className="img-fluid" alt="" />
                        </div>
                      </label>
                    </li>
                    <li className>
                      <input type="radio" name="carrier" id="unlocked" />
                      <label className="options" htmlFor="unlocked">
                        <div className="optImage">
                          <img src="./vendor/img/logo-unlocked.png" className="img-fluid" alt="" />
                        </div>
                      </label>
                    </li>
                    <li className>
                      <input type="radio" name="carrier" id="other" />
                      <label className="options" htmlFor="other">
                        <div className="optImage">
                          <img src="./vendor/img/logo-other.png" className="img-fluid" alt="" />
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="terms">
                <div className="title">
                  <h5>Please select the Storage Capacity</h5>
                </div>
                <div className="questions">
                  <ul className="answers">
                    <li className>
                      <input type="radio" name="storage" id="128gb" />
                      <label className="options" htmlFor="128gb">
                        <div className="optText">
                          <p>128GB</p>
                        </div>
                      </label>
                    </li>
                    <li className>
                      <input type="radio" name="storage" id="256gb" />
                      <label className="options" htmlFor="256gb">
                        <div className="optText">
                          <p>256GB</p>
                        </div>
                      </label>
                    </li>
                    <li className>
                      <input type="radio" name="storage" id="512gb" />
                      <label className="options" htmlFor="512gb">
                        <div className="optText">
                          <p>512GB</p>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="terms conditions">
                <div className="title">
                  <h5>Please select the condition</h5>
                </div>
                <div className="questions conditions">
                  <div className="row">
                    <div className="col-12">
                      <div className="tabs">
                        <input type="radio" className="tabs__button" name="condition" id="good" defaultChecked />
                        <label className="tabs__text" htmlFor="good"><span className="icon"><i className="fas fa-check" /></span> Good</label>
                        <div className="tabs__content">
                          <div className="row">
                            <div className="col-12">
                              <h5>Good Condition</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className="descript">
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <input type="radio" className="tabs__button" name="condition" id="poor" />
                        <label className="tabs__text" htmlFor="poor"><span className="icon"><i className="fas fa-check" /></span> Poor</label>
                        <div className="tabs__content">
                          <div className="row">
                            <div className="col-12">
                              <h5>Poor Condition</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className="descript">
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <input type="radio" className="tabs__button" name="condition" id="faulty" />
                        <label className="tabs__text" htmlFor="faulty"><span className="icon"><i className="fas fa-check" /></span> faulty</label>
                        <div className="tabs__content">
                          <div className="row">
                            <div className="col-12">
                              <h5>Faulty Condition</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ul className="descript">
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                                <li className>
                                  <h6>All parts of the device (including system
                                    software) are fully functional.</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="note">
                <div className="icon">
                  <img src="vendor/img/iCloud.webp" className="img-fluid" alt="iCloud" />
                </div>
                <div className="text text-left">
                  <div className="term-text">
                    <p>
                      Please REMOVE your iCloud account before sending your device to us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="side-box">
            <div className="row">
              <div className="col-xl-12">
                <div className="headings line-bottom">
                  <h5>Item Summary</h5>
                </div>
                <div className="detail line-bottom">
                  <h6>Device - <span className="contexts"> iPhone 12 Pro Max (256GB) </span> </h6>
                  <h6>Storage - <span className="contexts"> 256GB </span> </h6>
                  <h6>Network - <span className="contexts"> Unlocked </span> </h6>
                  <h6>Condition - <span className="contexts"> Faulty </span> </h6>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-xl-12">
                <div className="headings mb-0">
                  <h6>We'll pay you</h6>
                </div>
                <div className="detail">
                  <h2>$271.80</h2>
                </div>
                <div className="submission">
                  <button className="btn green" type="submit">
                    Sell this device
                  </button>
                </div>
                <div className="terms">
                  <div className="icon">
                    <img src="vendor/img/iCloud.webp" className="img-fluid" alt="iCloud" />
                  </div>
                  <div className="text text-left">
                    <div className="term-head">
                      <p>Selling an Apple Device?</p>
                    </div>
                    <div className="term-text">
                      <p>
                        Please REMOVE your iCloud account before sending your device to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>

    )
}

export default ProductDetails
