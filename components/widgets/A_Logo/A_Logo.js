import React from 'react'
// import * as T from "prop-types";
import './A_Logo.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('A_Logo')
import { Link } from 'react-router'

const A_Logo = ({mix}) => {
  return (
    <Link to={'/'} className={cn('link', mix)} >
      <svg  viewBox="0 0 333 137" className={cn('logo-svg')}>
        <defs>
          <path d="M84.7954277,-6.31088724e-29 C84.7954277,29.7758468 84.7954277,54.2741691 84.7954277,73.4949666 C84.7954277,102.326163 88.5742279,95.7727032 63.6502263,110.188301 C38.7161748,124.6039 46.2838252,124.6039 21.3497737,110.188301 C-3.5742279,95.7727032 0.204572339,102.326163 0.204572339,73.4949666 C0.204572339,54.2741691 0.204572339,29.7758468 0.204572339,-5.68434189e-14 L84.7954277,-6.31088724e-29 Z" id="path-1" />
          <filter x="-16.5%" y="-8.3%" width="132.9%" height="123.1%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix values="0 0 0 0 0.354565264   0 0 0 0 0.354565264   0 0 0 0 0.354565264  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" />
          </filter>
          <linearGradient x1="37.2772908%" y1="89.3879532%" x2="62.1229084%" y2="8.93897365%" id="linearGradient-3">
            <stop stopColor="#F2CA00" offset="0%" />
            <stop stopColor="#F2E200" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Logo4" transform="translate(8.000000, 4.000000)">
            <g id="Shape">
              <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
              <use fill="#FEFEFE" fillRule="evenodd" xlinkHref="#path-1" />
            </g>
            <path d="M22.2205179,71.8983555 C22.2205179,72.8583317 22.9113546,73.0402219 23.3888446,72.2217159 L36.7992032,48.6366158 C37.0531873,48.1919952 37.439243,48 37.9573705,48 L39.9587649,48 C40.4667331,48 40.659761,48.3233604 40.4057769,48.767981 L19.7721116,85.1157123 C19.47749,85.631068 19,85.5603329 19,84.9237171 L19,48.9700812 C19,48.3334654 19.3250996,48.010105 19.9651394,48.010105 L21.2553785,48.010105 C21.9055777,48.010105 22.2205179,48.3334654 22.2205179,48.9700812 L22.2205179,71.8983555 Z M38.3231076,62.4097484 L55.4822709,62.4097484 C59.099004,62.4097484 62.2077689,63.4101446 64.6460159,65.0976818 C65.1743028,65.4614623 65.2250996,65.9970279 64.7679283,66.4416485 L63.6808765,67.5329899 C63.2237052,67.9877155 62.7766932,67.9776105 62.3195219,67.6643551 C60.4603586,66.3810184 58.1338645,65.6130374 55.4822709,65.6130374 L38.2926295,65.6130374 L48.2488048,83.2462849 L55.4822709,83.2462849 C59.352988,83.2462849 61.9334661,80.6897167 61.9334661,76.8397068 C61.9334661,72.9896968 59.352988,70.4230236 55.4822709,70.4230236 L47.2328685,70.4230236 L48.0557769,70.4230236 L48.0354582,70.4230236 L44.9165339,70.4230236 C43.9209163,70.4230236 43.209761,70.4432336 42.650996,69.4731524 L41.7772908,68.1392907 C41.4928287,67.65425 41.7468127,67.2197345 42.285259,67.2197345 L55.4822709,67.2197345 C61.2934263,67.2197345 65.1641434,71.0596394 65.1641434,76.8397068 C65.1641434,82.6096691 61.2934263,86.459679 55.4822709,86.459679 L49.2037849,86.459679 L49.1834661,86.459679 L47.1820717,86.459679 C46.6537849,86.459679 46.3286853,86.3586289 46.0239044,85.8129582 L36.0880478,68.402021 C35.701992,67.7654052 35.1838645,67.7654052 34.7978088,68.402021 L24.8721116,85.8230632 C24.6079681,86.2777888 24.2219124,86.469784 23.7037849,86.469784 L22.2916335,86.459679 C21.5195219,86.449574 21.2045817,85.9544284 21.5804781,85.3077075 L42.4071713,48.6366158 C42.6611554,48.1919952 43.0472112,48 43.5653386,48 L45.5667331,48 C46.0848606,48 46.2677291,48.3233604 46.013745,48.767981 L38.3231076,62.4097484 Z M45.1705179,91.2696651 C44.5304781,91.2696651 44.2053785,91.5930256 44.2053785,92.2296414 L44.2053785,98.0299188 C44.2053785,98.6766396 43.8802789,99 43.2300797,99 L41.9398406,99 C41.2998008,99 41.025498,98.7170596 41.025498,98.0703388 L41.025498,89.7741232 C41.025498,88.6221518 41.7163347,88.0663761 42.9964143,88.0663761 L45.1400398,88.0663761 L45.1705179,88.0663761 L51.9061753,88.0663761 L55.4822709,88.0663761 C62.2585657,88.0663761 66.7693227,83.5696453 66.7693227,76.8397068 C66.7693227,74.2022984 65.9972112,71.8983555 64.7679283,70.0390331 C64.3818725,69.5843075 64.452988,69.1396869 64.9,68.6950664 L65.936255,67.7957202 C66.3832669,67.3409947 66.9013944,67.3409947 67.2874502,67.8563503 C68.963745,70.1703983 70,73.2423222 70,76.8397068 C70,85.4997028 64.1888446,91.2696651 55.4822709,91.2696651 L45.1705179,91.2696651 Z M49.0412351,98.0299188 C49.0412351,98.6665346 48.7161355,99 48.0659363,99 L46.7756972,99 C46.1356574,99 45.8105578,98.6766396 45.8105578,98.0299188 L45.8105578,93.8363384 C45.8105578,93.1896176 46.1356574,92.8763622 46.7756972,92.8763622 L48.0659363,92.8763622 C48.7161355,92.8763622 49.0412351,93.1997226 49.0412351,93.8363384 L49.0412351,98.0299188 Z M23.8358566,48.9700812 C23.8358566,48.3334654 24.1609562,48.010105 24.800996,48.010105 L26.0912351,48.010105 C26.7414343,48.010105 27.0563745,48.3334654 27.0563745,48.9700812 L27.0563745,61.9853378 C27.0563745,62.4400634 26.9954183,62.7634238 26.7414343,63.2080444 L24.6079681,66.866059 C24.2828685,67.4319398 23.8358566,67.3106796 23.8358566,66.6740638 L23.8358566,48.9700812 Z M41.6960159,86.459679 C41.1778884,86.459679 40.7918327,86.2676838 40.5378486,85.8129582 L34.0256972,74.2831385 C33.7717131,73.8284129 33.7717131,73.4444224 34.0256972,72.9998019 L34.9908367,71.3931048 C35.2448207,70.9484842 35.6410359,70.9484842 35.8950199,71.3931048 L44.02251,85.7018031 C44.276494,86.1464236 44.0834661,86.469784 43.5653386,86.469784 L41.6960159,86.459679 Z" id="Shape" fill="url(#linearGradient-3)" />
            <path d="M136.968075,63.6916468 C136.968075,63.4310263 136.78767,63.2505967 136.537108,63.2505967 L132.11719,63.2505967 C131.906718,63.2505967 131.616065,63.4009547 131.535885,63.5813842 L124.089176,71.8009547 L124.089176,63.6916468 C124.089176,63.4310263 123.908771,63.2505967 123.648186,63.2505967 L120.430967,63.2505967 C120.180405,63.2505967 120,63.4310263 120,63.6916468 L120,83.3785203 C120,83.6391408 120.180405,83.8195704 120.430967,83.8195704 L123.648186,83.8195704 C123.908771,83.8195704 124.089176,83.6391408 124.089176,83.3785203 L124.089176,77.7350835 L127.627115,73.8558473 L133.490271,83.4887828 C133.570451,83.6692124 133.861103,83.8195704 134.071575,83.8195704 L137.840031,83.8195704 C138.090594,83.8195704 138.270998,83.6391408 138.270998,83.3785203 L130.523614,70.7083532 L136.968075,63.6916468 Z M150.939425,72.522673 L145.617483,72.522673 L145.617483,67.0195704 L150.939425,67.0195704 C152.242349,67.0195704 153.29471,68.1422434 153.29471,69.8062053 C153.29471,71.4701671 152.242349,72.522673 150.939425,72.522673 Z M152.673316,83.3785203 C152.783563,83.5990453 152.963968,83.8195704 153.25462,83.8195704 L157.053144,83.8195704 C157.313728,83.8195704 157.494133,83.6391408 157.494133,83.3785203 L153.61543,75.8105012 C155.8304,74.8381862 157.383886,72.5928401 157.383886,69.7661098 C157.383886,65.9670644 154.627701,63.2505967 151.230077,63.2505967 L141.969297,63.2505967 C141.708712,63.2505967 141.528307,63.4310263 141.528307,63.6916468 L141.528307,83.3785203 C141.528307,83.6391408 141.708712,83.8195704 141.969297,83.8195704 L145.186516,83.8195704 C145.437078,83.8195704 145.617483,83.6391408 145.617483,83.3785203 L145.617483,76.2816229 L149.055197,76.2816229 L152.673316,83.3785203 Z M170.48328,76.1011933 L177.909944,63.6916468 C177.909944,63.4310263 177.719517,63.2505967 177.468955,63.2505967 L173.710521,63.2505967 C173.419869,63.2505967 173.239464,63.4711217 173.129217,63.6916468 L168.418647,71.6505967 L163.537694,63.6916468 C163.427447,63.4711217 163.247042,63.2505967 162.95639,63.2505967 L159.197956,63.2505967 C158.937372,63.2505967 158.756967,63.4310263 158.756967,63.6916468 L166.394104,76.1412888 L166.394104,83.3785203 C166.394104,83.6391408 166.574509,83.8195704 166.825071,83.8195704 L170.052313,83.8195704 C170.302875,83.8195704 170.48328,83.6391408 170.48328,83.3785203 L170.48328,76.1011933 Z M189.816662,73.1341289 L184.885597,73.1341289 L184.885597,67.2400955 L189.816662,67.2400955 C191.119585,67.2400955 192.242104,68.1422434 192.242104,70.1670644 C192.242104,72.1618138 191.119585,73.1341289 189.816662,73.1341289 Z M181.237411,63.2505967 C180.976826,63.2505967 180.796421,63.4310263 180.796421,63.6916468 L180.796421,83.3785203 C180.796421,83.6391408 180.976826,83.8195704 181.237411,83.8195704 L184.45463,83.8195704 C184.705192,83.8195704 184.885597,83.6391408 184.885597,83.3785203 L184.885597,76.9331742 L190.177471,76.9331742 C193.575095,76.9331742 196.33128,74.2568019 196.33128,70.126969 C196.33128,66.0071599 193.575095,63.2505967 190.177471,63.2505967 L181.237411,63.2505967 Z M203.527427,83.3785203 C203.527427,83.6391408 203.707832,83.8195704 203.968417,83.8195704 L207.185636,83.8195704 C207.436198,83.8195704 207.616603,83.6391408 207.616603,83.3785203 L207.616603,66.9794749 L212.577735,66.9794749 C212.828298,66.9794749 213.008702,66.7990453 213.008702,66.5484487 L213.008702,63.6916468 C213.008702,63.4310263 212.828298,63.2505967 212.577735,63.2505967 L198.576318,63.2505967 C198.315733,63.2505967 198.135328,63.4310263 198.135328,63.6916468 L198.135328,66.5484487 C198.135328,66.7990453 198.315733,66.9794749 198.576318,66.9794749 L203.527427,66.9794749 L203.527427,83.3785203 Z M225.496724,63 C219.713748,63 215.003178,67.7112172 215.003178,73.4949881 C215.003178,79.2887828 219.713748,84 225.496724,84 C231.289723,84 236.000293,79.2887828 236.000293,73.4949881 C236.000293,67.7112172 231.289723,63 225.496724,63 Z M225.466657,80.3713604 C221.698201,80.3713604 219.092354,77.3742243 219.092354,73.6052506 C219.092354,69.8463007 221.698201,66.7990453 225.466657,66.7990453 C229.22509,66.7990453 231.911118,69.8463007 231.911118,73.6052506 C231.911118,77.3742243 229.22509,80.3713604 225.466657,80.3713604 Z M249.169845,73.1341289 L244.248802,73.1341289 L244.248802,67.2400955 L249.169845,67.2400955 C250.472768,67.2400955 251.595287,68.1422434 251.595287,70.1670644 C251.595287,72.1618138 250.472768,73.1341289 249.169845,73.1341289 Z M240.590594,63.2505967 C240.340031,63.2505967 240.159626,63.4310263 240.159626,63.6916468 L240.159626,83.3785203 C240.159626,83.6391408 240.340031,83.8195704 240.590594,83.8195704 L243.817835,83.8195704 C244.068397,83.8195704 244.248802,83.6391408 244.248802,83.3785203 L244.248802,76.9331742 L249.530654,76.9331742 C252.938301,76.9331742 255.684463,74.2568019 255.684463,70.126969 C255.684463,66.0071599 252.938301,63.2505967 249.530654,63.2505967 L240.590594,63.2505967 Z M268.533294,63 C262.740295,63 258.039748,67.7112172 258.039748,73.4949881 C258.039748,79.2887828 262.740295,84 268.533294,84 C274.326293,84 279.026841,79.2887828 279.026841,73.4949881 C279.026841,67.7112172 274.326293,63 268.533294,63 Z M268.493204,80.3713604 C264.734771,80.3713604 262.128923,77.3742243 262.128923,73.6052506 C262.128923,69.8463007 264.734771,66.7990453 268.493204,66.7990453 C272.26166,66.7990453 274.937665,69.8463007 274.937665,73.6052506 C274.937665,77.3742243 272.26166,80.3713604 268.493204,80.3713604 Z M297.488266,80.5918854 C297.488266,80.3412888 297.307862,80.1608592 297.057299,80.1608592 L287.285372,80.1608592 L287.285372,63.6916468 C287.285372,63.4310263 287.104967,63.2505967 286.844383,63.2505967 L283.627163,63.2505967 C283.376601,63.2505967 283.196196,63.4310263 283.196196,63.6916468 L283.196196,83.3785203 C283.196196,83.6391408 283.376601,83.8195704 283.627163,83.8195704 L297.057299,83.8195704 C297.307862,83.8195704 297.488266,83.6391408 297.488266,83.3785203 L297.488266,80.5918854 Z M305.706708,63.6916468 C305.706708,63.4310263 305.526303,63.2505967 305.275741,63.2505967 L302.048499,63.2505967 C301.797937,63.2505967 301.617532,63.4310263 301.617532,63.6916468 L301.617532,83.3785203 C301.617532,83.6391408 301.797937,83.8195704 302.048499,83.8195704 L305.275741,83.8195704 C305.526303,83.8195704 305.706708,83.6391408 305.706708,83.3785203 L305.706708,63.6916468 Z M310.697907,82.1856802 C313.233597,83.8195704 315.588882,84 318.124572,84 C321.051139,84 325,81.8949881 325,78.526969 C325,71.5403341 314.316026,72.8434368 314.316026,69.0844869 C314.316026,68.6434368 314.396206,66.7689737 317.613425,66.7689737 C318.956439,66.7689737 321.121297,67.4205251 322.063411,67.7112172 C322.133568,67.7412888 322.243815,67.7813842 322.313973,67.7813842 C322.494378,67.7813842 322.684805,67.6711217 322.714872,67.5207637 L323.807324,65.0649165 C323.837391,64.9947494 323.837391,64.8844869 323.837391,64.8143198 C323.767234,64.5937947 323.656986,64.4835322 323.546739,64.4133652 C322.494378,63.9823389 319.96871,63 317.503178,63 C312.832698,63 310.22685,65.2052506 310.22685,68.9040573 C310.22685,76.1412888 320.940892,74.8381862 320.940892,78.2362768 C320.940892,79.4391408 319.317248,80.3713604 317.613425,80.3713604 C314.867263,80.3713604 313.093282,79.5794749 312.331573,79.1484487 C312.261416,79.1083532 312.181236,79.1083532 312.070989,79.1083532 C311.930674,79.1083532 311.790359,79.1484487 311.710179,79.2587112 L310.517503,81.5742243 C310.487435,81.6443914 310.487435,81.7546539 310.487435,81.824821 C310.487435,82.0052506 310.66784,82.1455847 310.697907,82.1856802 Z" id="Shape" fill="#02328C" fillRule="nonzero" />
          </g>
        </g>
      </svg>
    </Link>
  )
}

A_Logo.propTypes = {}

A_Logo.defaultProps = {}
export default A_Logo
