import React from 'react';

import { GrMail } from 'react-icons/gr';

export default function Info() {
  return (
    <div className="info--section">
      <div className="info--imgHoler"></div>
      <h1 className="info--name">Min Khant Kyaw</h1>
      <h4 className="info--role">Frontend Developer</h4>
      <small className="info--website">minkhantkyaw.dev</small>
      <div className="info--mail">
      <GrMail />
      <p>Email</p>
      </div>
    </div>
  );
}
