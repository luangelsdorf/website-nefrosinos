import Script from "next/script";

export default function TagManager() {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7K3MXS');
        `}
      </Script>

      {/* Hotjar Tracking Code for https://nefrosinos.com.br/ */}
      <Script id="hotjar-tracking-code" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hjfunction(){(h.hj.q=h.hj.q[]).push(arguments)};
              h._hjSettings={hjid:3593679,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  )
}
