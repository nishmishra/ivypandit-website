import Link from 'next/link';

export default function Hindi() {
  return <main>
    <section className="banner-hero">
      <img src="/images/ivypandit-channel-banner3.png" alt="आइवी पण्डित बैनर" />
    </section>

    <section className="page-hero devanagari">
      <h1>प्राचीन ज्ञान। आधुनिक तंत्रिका-विज्ञान।</h1>
      <p><strong>डॉ. निशान्त के. मिश्र, MD, PhD</strong><br/>स्ट्रोक न्यूरोलॉजिस्ट • न्यूरोसाइंटिस्ट • संस्कृत-प्रेमी</p>
      <p>आइवी पण्डित आधुनिक तंत्रिका-विज्ञान, संज्ञान, संस्कृत-साहित्य, भारतीय ज्ञान-परम्परा, अध्ययन, स्मृति, नीति और मानव-कल्याण के बीच प्रमाण-आधारित तथा विचार-प्रेरक संवाद का प्रयास है।</p>
      <div className="btns"><Link className="btn" href="/">English</Link><Link className="btn secondary" href="/sa">संस्कृतम्</Link></div>
    </section>

    <section className="section">
      <h2 className="devanagari">आइवी पण्डित व्याख्यान-श्रृंखला</h2>
      <p className="devanagari">संस्कृत ग्रन्थों, भारतीय ज्ञान-परम्परा, तंत्रिका-विज्ञान, मस्तिष्क-स्वास्थ्य, ध्यान, स्मृति और आधुनिक विज्ञान पर आधारित व्याख्यानों का संग्रह।</p>
      <div className="video-frame"><iframe src="https://www.youtube.com/embed/videoseries?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN" title="IvyPandit Playlist" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
    </section>

    <section className="section copy narrow devanagari">
      <h2>मेरी शास्त्र-यात्रा</h2>
      <p>मैं पारम्परिक आचार्य या गुरु नहीं हूँ। मैं एक न्यूरोलॉजिस्ट, वैज्ञानिक और संस्कृत-ग्रन्थों का विनम्र विद्यार्थी हूँ। आइवी पण्डित मेरे उस प्रयास का लेखा है जिसमें मैं भारतीय ज्ञान-परम्परा को पढ़ता हूँ, समझने का प्रयास करता हूँ, और उससे आधुनिक विज्ञान के लिए सावधानीपूर्वक प्रश्न बनाता हूँ।</p>

      <h2>मुख्य विषय</h2>
      <ul>
        <li>गायत्री मन्त्र और न्यूरोप्लास्टिसिटी</li>
        <li>गुरुकुल, ध्यान, स्मृति और अध्ययन</li>
        <li>भगवद्गीता और मानसिक धैर्य</li>
        <li>महाभारत और नेतृत्व</li>
        <li>संस्कृत, भाषा और संज्ञान</li>
        <li>वेद, उपनिषद्, पुराण और आधुनिक जीवन</li>
      </ul>

      <h2>वैज्ञानिक पृष्ठभूमि</h2>
      <p>डॉ. मिश्र MD, PhD स्ट्रोक न्यूरोलॉजिस्ट और चिकित्सक-वैज्ञानिक हैं। उनका कार्य न्यूरोलॉजी, स्ट्रोक, मिर्गी, मस्तिष्क-स्वास्थ्य, संज्ञान और क्लिनिकल रिसर्च से संबंधित रहा है।</p>
      <p><a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar Profile →</a></p>

      <h2>संपर्क</h2>
      <p>ईमेल: nishant.mishra@ivypandit.com</p>
    </section>
  </main>;
}
