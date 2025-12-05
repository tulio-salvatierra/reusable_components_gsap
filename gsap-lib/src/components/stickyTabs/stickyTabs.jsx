import './stickyTabs.css'
import React from 'react'

function StickyTabs() {
  return (
    <div className="demo-group">
  <div className="demo-nav">
    <div className="container">
      <div className="demo-nav__content">
        <svg className="demo-nav__logo-svg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 178 40" fill="none">
          <path d="M161.77 13.4645C161.142 14.0944 160.069 13.6483 160.069 12.7574V0H156.084V15C156.084 16.6569 154.746 18 153.096 18H138.154V22H150.862C151.749 22 152.194 23.0771 151.566 23.7071L142.722 32.5858L145.539 35.4142L154.384 26.5356C155.01 25.9075 156.078 26.3491 156.084 27.2347V40L160.069 40L160.069 25C160.069 23.3431 161.407 22 163.058 22H178V18H165.284C164.404 17.9936 163.964 16.9273 164.582 16.2985L164.587 16.2929L173.432 7.41421L170.614 4.58582L161.77 13.4645Z" fill="currentColor"></path>
          <path d="M16.084 37.178C6.27782 37.178 0 29.956 0 20.066C0 10.176 6.27782 3 16.084 3C25.8903 3 32.1681 10.176 32.1681 20.066C32.1681 29.956 25.8903 37.178 16.084 37.178ZM5.2697 20.066C5.2697 26.828 8.33987 32.808 16.084 32.808C23.8282 32.808 26.8984 26.828 26.8984 20.066C26.8984 13.304 23.8282 7.37 16.084 7.37C8.33987 7.37 5.2697 13.304 5.2697 20.066Z" fill="currentColor"></path>
          <path d="M45.478 37.178C38.3754 37.178 34.847 33.498 34.7095 28.714H39.246C39.4293 31.428 41.0789 33.544 45.4322 33.544C49.373 33.544 50.4269 31.796 50.4269 30.094C50.4269 27.15 47.3109 26.828 44.2866 26.184C40.2083 25.218 35.5343 24.022 35.5343 19.146C35.5343 15.098 38.7878 12.384 44.4241 12.384C50.8393 12.384 53.9095 15.834 54.2303 19.882H49.6938C49.373 18.088 48.4107 16.018 44.5157 16.018C41.4914 16.018 40.2083 17.214 40.2083 18.962C40.2083 21.4 42.8202 21.63 46.1195 22.366C50.4269 23.378 55.1009 24.62 55.1009 29.864C55.1009 34.418 51.6183 37.178 45.478 37.178Z" fill="currentColor"></path>
          <path d="M72.6642 21.492C72.6642 18.364 72.0227 16.248 68.5859 16.248C65.2408 16.248 63.1329 18.594 63.1329 22.136V36.534H58.6422V13.074H63.1329V16.018H63.2246C64.4618 14.224 66.6155 12.384 70.1439 12.384C73.3974 12.384 75.4136 13.856 76.3301 16.478H76.4217C78.1172 14.224 80.5 12.384 84.0742 12.384C88.7941 12.384 91.1769 15.236 91.1769 20.25V36.534H86.6862V21.492C86.6862 18.364 86.0447 16.248 82.6079 16.248C79.2628 16.248 77.1549 18.594 77.1549 22.136V36.534H72.6642V21.492Z" fill="currentColor"></path>
          <path d="M106.545 37.224C99.2594 37.224 94.8603 32.164 94.8603 24.804C94.8603 17.49 99.2594 12.338 106.591 12.338C113.831 12.338 118.23 17.444 118.23 24.758C118.23 32.118 113.831 37.224 106.545 37.224ZM99.5343 24.804C99.5343 29.68 101.734 33.498 106.591 33.498C111.357 33.498 113.556 29.68 113.556 24.804C113.556 19.882 111.357 16.11 106.591 16.11C101.734 16.11 99.5343 19.882 99.5343 24.804Z" fill="currentColor"></path>
        </svg>
        <ul className="demo-nav__ul">
          <li className="demo-nav__li">Home</li>
          <li className="demo-nav__li">Work</li>
          <li className="demo-nav__li">About</li>
          <li className="demo-nav__li">Contact</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="demo-header">
    <div className="container">
      <h1 className="demo-section__title">Sticky Section Tabs</h1>
    </div>
  </section>
  <div className="sticky-tab-group">
    <div className="sticky-tab-group__nav-bg"></div>
    <section className="sticky-tab">
      <div className="sticky-tab__sticky">
        <div className="sticky-tab__inner">
          <div className="container">
            <div className="sticky-tab__content">
              <h2 className="sticky-tab__title">Step 1: Concept</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sticky-tab__placeholder-content">
          <svg className="osmo-icon-svg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 160 160" fill="none">
            <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
    <section className="sticky-tab">
      <div className="sticky-tab__sticky">
        <div className="sticky-tab__inner">
          <div className="container">
            <div className="sticky-tab__content">
              <h2 className="sticky-tab__title">Step 2: Design</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sticky-tab__placeholder-content">
          <svg className="osmo-icon-svg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 160 160" fill="none">
            <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
    <section className="sticky-tab">
      <div className="sticky-tab__sticky">
        <div className="sticky-tab__inner">
          <div className="container">
            <div className="sticky-tab__content">
              <h2 className="sticky-tab__title">Step 3: Development</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sticky-tab__placeholder-content">
          <svg className="osmo-icon-svg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 160 160" fill="none">
            <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
    <section className="sticky-tab">
      <div className="sticky-tab__sticky">
        <div className="sticky-tab__inner">
          <div className="container">
            <div className="sticky-tab__content">
              <h2 className="sticky-tab__title">Step 4: Party 🎉</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sticky-tab__placeholder-content">
          <svg className="osmo-icon-svg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 160 160" fill="none">
            <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
  </div>
  <section className="demo-section">
    <div className="container">
      <h2 className="demo-section__title">More content</h2>
    </div>
  </section>
  <footer className="demo-footer">
    <div className="container">
      <h2 className="demo-footer__title">Footer</h2>
    </div>
  </footer>
</div>
  )
}

export default StickyTabs