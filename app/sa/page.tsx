import Link from 'next/link';

export default function Sanskrit() {
  return <main>
    <section className="banner-hero">
      <img src="/images/ivypandit-channel-banner3.png" alt="आइवी पण्डितः बैनर्" />
    </section>

    <section className="page-hero devanagari">
      <h1>प्राचीनं ज्ञानम्। आधुनिकं तन्त्रिका-विज्ञानम्।</h1>
      <p><strong>डॉ. निशान्त के. मिश्रः, MD, PhD</strong><br/>स्ट्रोक-न्यूरोलॉजिस्ट् • न्यूरोसाइंटिस्ट् • संस्कृत-प्रेमी</p>
      <p>आइवी पण्डितः तन्त्रिका-विज्ञानस्य, संज्ञानस्य, संस्कृत-साहित्यस्य, भारतीय-ज्ञान-परम्परायाः, अध्ययनस्य, स्मृतेः, नीतिशास्त्रस्य, मानव-कल्याणस्य च मध्ये प्रमाणसम्मतं चिन्तन-प्रेरकं संवादं स्थापयितुं प्रयत्नः अस्ति।</p>
      <div className="btns"><Link className="btn" href="/">English</Link><Link className="btn secondary" href="/hi">हिन्दी</Link></div>
    </section>

    <section className="section">
      <h2 className="devanagari">आइवी पण्डित-व्याख्यान-श्रृंखला</h2>
      <p className="devanagari">संस्कृत-ग्रन्थाः, भारतीय-ज्ञान-परम्परा, तन्त्रिका-विज्ञानम्, मस्तिष्क-स्वास्थ्यं, ध्यानम्, स्मृतिः, आधुनिक-विज्ञानं च — एतेषां विषये व्याख्यानानां संग्रहः।</p>
      <div className="video-frame"><iframe src="https://www.youtube.com/embed/videoseries?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN" title="IvyPandit Playlist" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
    </section>

    <section className="section copy narrow devanagari">
      <h2>मम शास्त्र-अध्ययन-यात्रा</h2>
      <p>अहं पारम्परिकः आचार्यः वा गुरुः वा नास्मि। अहं तन्त्रिका-रोग-विशेषज्ञः, वैज्ञानिकः, संस्कृत-ग्रन्थानां विनीतः विद्यार्थी च अस्मि। आइवी पण्डितः मम सततं अध्ययनं, मननं, प्रश्न-निर्माणं च दर्शयति—भारतीय-ज्ञान-परम्परातः आधुनिक-विज्ञानस्य कृते विवेकपूर्णान् प्रश्नान् उत्पादयितुम्।</p>

      <h2>मुख्य-विषयाः</h2>
      <ul>
        <li>गायत्री-मन्त्रः न्यूरोप्लास्टिसिटी च</li>
        <li>गुरुकुलम्, ध्यानम्, स्मृतिः, अध्ययनं च</li>
        <li>भगवद्गीता मानसिक-धैर्यं च</li>
        <li>महाभारतम् नेतृत्वं च</li>
        <li>संस्कृतम्, भाषा, संज्ञानं च</li>
        <li>वेदाः, उपनिषदः, पुराणानि, आधुनिक-जीवनं च</li>
      </ul>

      <h2>वैज्ञानिक-पृष्ठभूमिः</h2>
      <p>डॉ. मिश्रः MD, PhD, स्ट्रोक-न्यूरोलॉजिस्ट्, चिकित्सक-वैज्ञानिकः च अस्ति। तस्य कार्यं न्यूरोलॉजी, स्ट्रोक्, अपस्मारः, मस्तिष्क-स्वास्थ्यं, संज्ञानं, क्लिनिकल् रिसर्च् च सम्बद्धम् अस्ति।</p>
      <p><a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar Profile →</a></p>

      <h2>सम्पर्कः</h2>
      <p>ईमेल्: nishant.mishra@ivypandit.com</p>
    </section>
  </main>;
}
