import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

type Props = {
  color: Colors;
  size: number;
};

const ThreeButtons: React.FC<Props> = ({ color, size = 85 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 85 64" fill="none">
      <Path
        d="M33.6961 64.0001L26.8117 63.4863C24.9724 63.3527 23.128 63.2808 21.299 63.065C19.1515 62.8133 16.9423 62.6951 14.9026 62.0375C11.1418 60.861 7.8589 58.8573 5.86035 55.2507C5.13918 53.9926 4.8555 52.5308 5.05374 51.0943C5.3209 48.9519 5.32602 46.7735 5.45446 44.6157C5.48259 44.3029 5.53935 43.9934 5.62401 43.6909C6.08126 41.9955 6.61043 40.3155 6.99575 38.5995C7.45814 36.5445 8.24422 34.8542 10.5151 34.1966C11.5426 33.8934 11.8663 32.9789 11.6248 31.8589C11.5374 31.4633 11.4244 31.0677 11.3679 30.667C11.1727 29.362 11.4398 28.2831 12.8167 27.7488C12.9875 27.6656 13.1277 27.5308 13.2175 27.3635C14.0571 25.8898 15.4107 24.7775 17.0193 24.2398C21.2014 22.6625 25.4399 21.4398 29.9508 21.2497C33.6985 21.0781 37.4538 21.328 41.1457 21.9946C44.3208 22.5803 47.3417 23.4948 49.5201 26.151C50.1194 26.8812 50.5648 27.725 50.8297 28.6318C51.0946 29.5385 51.1734 30.4894 51.0614 31.4274C51.0152 32.0079 51.0614 32.6039 50.9792 33.1793C50.8508 34.0681 51.3131 34.3815 52.053 34.7463C52.596 34.9862 53.0815 35.3396 53.4767 35.7827C53.872 36.2258 54.1678 36.7483 54.3444 37.3151C55.4952 41.5948 56.7796 45.8488 57.6016 50.1901C58.0589 52.6253 58.2901 55.4459 56.1117 57.3828C54.6283 58.7839 52.901 59.9017 51.0151 60.6812C47.9326 61.8217 44.6393 62.4845 41.418 63.286C40.4966 63.4793 39.5593 63.5877 38.618 63.6096C36.9894 63.7124 35.3556 63.7689 33.727 63.8408L33.6961 64.0001ZM11.6042 38.0806C10.4123 38.1269 9.92937 38.5944 9.58001 39.961C8.65688 43.803 8.18105 47.7389 8.16201 51.6903C8.1654 52.1616 8.2614 52.6277 8.44458 53.062C9.59541 55.9134 11.8714 57.6088 14.6817 58.3538C17.045 58.9754 19.5522 59.0731 21.9977 59.3813C24.0528 59.6279 26.0821 59.8951 28.1321 59.9978C30.3156 60.1006 32.5094 59.9978 34.698 59.9978C38.6774 59.9601 42.6271 59.3067 46.4067 58.0609C47.5986 57.6808 48.8111 57.3571 50.0287 57.0797C52.5976 56.4888 54.0669 54.9578 54.2108 52.2862C54.2839 50.7501 54.1943 49.2105 53.9436 47.6932C53.5634 45.4069 53.0497 43.1361 52.4589 40.8909C52.156 40.0079 51.7324 39.1711 51.2001 38.4043C51.1021 38.2911 50.9804 38.2007 50.8438 38.1395C50.7071 38.0783 50.5587 38.0477 50.4089 38.0498C50.2907 38.0498 50.1315 38.4762 50.0596 38.728C49.7924 39.6938 49.5817 40.6751 49.2838 41.6307C49.217 41.8465 48.77 42.1445 48.6673 42.1085C47.5935 41.6462 46.8229 42.1085 46.0984 42.8175C45.8126 43.145 45.463 43.4108 45.0709 43.5985C42.1887 44.5746 39.3527 45.9566 36.3883 46.3522C28.6818 47.3798 21.2425 45.8128 14.1011 42.8278C13.6377 42.6336 13.245 42.3018 12.976 41.8774C12.2927 40.7162 11.3371 39.6476 11.594 38.0806H11.6042ZM32.6686 24.2347C27.6421 24.3704 22.671 25.3213 17.9492 27.0501C16.3257 27.6717 15.1903 28.8328 14.1422 30.1327C14.0785 30.2147 14.0327 30.3093 14.0079 30.4102C13.9831 30.5111 13.9799 30.6161 13.9984 30.7184C14.5378 32.5833 15.1338 34.3404 17.2659 35.0956C19.4126 35.9083 21.6593 36.4267 23.9449 36.6369C26.3082 36.8116 28.6458 37.3151 31.04 37.0325C33.3108 36.7654 35.6382 36.8168 37.8576 36.3492C41.156 35.6659 44.1718 34.1503 47.0129 32.3367C47.4468 32.029 47.8373 31.6644 48.174 31.2527C48.4464 30.961 48.6034 30.5801 48.6157 30.1812C48.628 29.7823 48.4948 29.3925 48.2408 29.0846C47.3305 27.6591 45.9571 26.5905 44.3516 26.0585C43.0723 25.638 41.759 25.3286 40.4265 25.1337C37.5237 24.7484 34.5901 24.4556 32.6686 24.2347ZM14.0908 37.0788C13.6696 38.8359 13.9521 39.5346 15.3599 40.259C18.9562 42.1034 22.943 42.7919 26.8631 43.2902C31.7027 43.9119 36.5373 43.5574 41.2022 41.6564C43.8841 40.5621 45.8261 38.7228 47.6449 36.6472C47.7527 36.5239 47.7168 36.2619 47.7939 35.7584C42.5226 39.0568 36.9329 40.3823 31.0297 40.4131C25.1265 40.4439 19.4494 39.8685 14.0908 37.0582V37.0788Z"
        fill={color}
      />
      <Path
        d="M53.9711 31.4737C55.2658 31.5302 56.5143 31.633 57.7679 31.633C61.131 31.6925 64.4759 31.1263 67.6322 29.9633C70.1339 29.1037 72.3302 27.5323 73.9515 25.4421C74.2392 25.0568 74.5526 24.692 74.8557 24.3221L74.6245 24.0858C73.597 24.5996 72.5129 25.1133 71.4751 25.6271C67.4678 27.6821 63.1265 28.2781 58.7029 28.4785C57.4134 28.535 56.1341 28.5247 54.8394 28.5555C54.3256 28.5555 54.0636 28.3757 53.9763 27.8106C53.8478 26.9475 53.6013 26.0998 53.3855 25.1801C53.5235 25.1465 53.6647 25.1276 53.8068 25.1236C57.6086 25.4627 61.3643 25.0208 65.1096 24.4506C65.8205 24.3412 66.5123 24.1319 67.1647 23.8289C69.3225 22.8322 71.4546 21.7738 73.597 20.7463C73.682 20.7034 73.7644 20.6553 73.8436 20.6025C75.9809 19.2324 76.1024 17.6911 74.2084 15.9786C72.6899 14.6476 70.821 13.7809 68.8241 13.4817C65.2117 12.7711 61.5368 12.4269 57.8552 12.4541C52.8449 12.6184 47.924 13.8276 43.4081 16.0043C42.4577 16.4512 41.759 17.5096 41.0397 18.3676C40.3204 19.2256 39.4984 18.4652 38.7123 18.4601C38.5942 18.4601 38.4298 17.6329 38.3887 17.1808C38.3887 17.0112 38.625 16.7955 38.7945 16.6362C39.4111 16.0351 40.1766 15.5419 40.6441 14.8432C41.4815 13.5896 42.6992 12.9576 44.0093 12.4541C48.1708 10.8358 52.4299 9.64385 56.9407 9.44348C60.6625 9.24753 64.3945 9.47852 68.0638 10.1319C71.1463 10.7022 74.0748 11.5294 76.284 14.0314C76.9974 14.8279 77.5213 15.7754 77.8167 16.803C78.1121 17.8306 78.1712 18.9117 77.9897 19.9654C77.9255 20.7055 77.9255 21.4498 77.9897 22.19C77.9897 22.3133 78.1489 22.5188 78.2568 22.5291C79.4385 22.6781 79.9369 23.7518 80.7435 24.3941C81.0531 24.7099 81.2622 25.1103 81.3446 25.5449C82.4646 29.7937 83.713 34.0169 84.5864 38.3222C85.1002 40.7883 85.2184 43.5523 83.1119 45.4687C81.5677 46.8448 79.8254 47.9809 77.9434 48.839C75.987 49.6934 73.9441 50.3342 71.8502 50.7502C69.6513 51.2383 67.3907 51.4489 65.1713 51.7418C64.267 51.8548 63.3525 51.8394 62.4432 51.9319C61.8986 51.9884 61.6674 51.8394 61.5851 51.2588C61.4362 50.2313 61.1844 49.2551 60.9738 48.243C61.1291 48.1779 61.291 48.1297 61.4567 48.0992C65.8869 48.0862 70.2837 47.3326 74.4652 45.8694C76.1196 45.3197 77.779 44.7802 79.4025 44.1483C79.8474 43.9264 80.2081 43.5657 80.4301 43.1208C81.5912 41.0195 81.4833 38.7332 81.1031 36.4881C80.6664 33.8936 80.0756 31.3145 79.4334 28.7816C79.1377 27.9607 78.7185 27.1897 78.19 26.4953C78.109 26.3872 78.0033 26.3001 77.8818 26.2411C77.7603 26.1821 77.6264 26.153 77.4913 26.1563C77.3167 26.1974 77.1728 26.5673 77.1009 26.8139C76.8286 27.7798 76.6179 28.7559 76.3199 29.7115C76.248 29.9376 75.837 30.2818 75.7497 30.2253C74.4293 29.5522 73.6689 30.5592 72.7647 31.1552C72.2634 31.5239 71.7324 31.8504 71.1772 32.1314C66.7023 34.0734 62.0578 35.178 57.136 34.6539C56.7743 34.547 56.4362 34.3726 56.1393 34.1402C55.7642 33.9295 55.4097 33.6624 55.0192 33.4877C53.7554 32.9739 53.7502 32.9893 53.9711 31.4737Z"
        fill={color}
      />
      <Path
        d="M45.699 6.91552C44.9232 7.19809 44.2656 7.48067 43.5772 7.66563C43.4475 7.67229 43.3181 7.64832 43.1993 7.59565C43.0806 7.54299 42.976 7.46311 42.8939 7.36249C41.6651 5.74088 39.8716 4.64055 37.8693 4.2799C34.0892 3.44697 30.2316 3.01643 26.3609 2.99549C22.5231 2.9698 18.8188 3.83293 15.2019 5.05055C13.9099 5.41302 12.6597 5.9107 11.472 6.53534C10.5215 7.11589 9.81767 8.11773 9.02647 8.95517C8.93399 9.05278 8.96995 9.31481 9.02647 9.46894C9.54023 11.6884 10.6243 13.3684 12.9568 14.0671C15.1763 14.7299 17.3752 15.367 19.7179 15.4183C20.8739 15.444 22.0247 15.7163 23.1858 15.7574C24.556 15.8152 25.9284 15.7929 27.296 15.6906C29.2329 15.5314 31.1543 15.2488 33.0861 15.0536C33.2967 15.0536 33.6975 15.2231 33.7232 15.367C33.8876 16.2455 33.9698 17.1395 34.0982 18.1413C32.9114 18.2029 31.7143 18.2286 30.5018 18.3365C28.5598 18.5112 26.6178 18.715 24.6758 18.9479C22.1069 19.2562 19.6255 18.7475 17.1234 18.3776C16.1276 18.2484 15.1446 18.0353 14.1847 17.7406C12.4687 17.1754 10.7887 16.5075 9.08298 15.8807C8.60517 17.0881 8.95454 18.316 10.1773 18.8092C12.3146 19.6723 14.4981 20.4224 16.6148 21.1982C15.5153 21.712 14.2617 22.7395 12.967 22.7806C11.6723 22.8217 10.203 22.1589 9.02647 21.4448C8.24447 20.9582 7.60348 20.2753 7.16724 19.4641C6.73099 18.6529 6.51471 17.7416 6.53986 16.8209C6.40989 16.7652 6.2698 16.7369 6.12839 16.7378C5.98698 16.7387 5.84729 16.7688 5.71804 16.8262C5.58879 16.8836 5.47279 16.9671 5.37727 17.0714C5.28176 17.1756 5.20878 17.2985 5.16294 17.4323C4.69706 18.6239 4.32601 19.8505 4.05323 21.1006C3.69873 22.8885 3.44186 24.6969 3.26718 26.5105C3.11659 27.9028 3.08906 29.3057 3.18496 30.7029C3.3134 32.3366 4.30497 33.5953 5.36846 34.6897L4.15084 37.798C2.56771 36.5541 1.29597 34.9587 0.436331 33.1381C-0.334317 31.5249 0.153751 29.8603 0.138338 28.2162C0.138338 24.0239 1.19157 20.0217 2.36295 16.0503C2.75855 14.6991 3.46753 13.5945 5.03965 13.2194C6.43195 12.8906 6.90461 11.822 6.61177 10.3886C6.46756 9.56323 6.38004 8.72899 6.34977 7.89169C6.34977 7.70159 6.44223 7.37792 6.58094 7.32654C7.91673 6.73571 8.48189 5.35368 9.52484 4.49569C10.3864 3.79777 11.3566 3.24586 12.3968 2.86192C16.7895 1.2487 21.2387 0.0670308 26.0115 0.0105167C29.3585 -0.0543825 32.7046 0.181195 36.0094 0.714388C39.3284 1.27439 42.4931 2.25568 44.6715 5.09166C44.9069 5.38572 45.1231 5.69461 45.3188 6.01643C45.4628 6.30856 45.5897 6.60876 45.699 6.91552Z"
        fill={color}
      />
      <Path
        d="M55.7896 21.7995C53.5034 21.3371 52.9074 21.0083 53.5034 19.3283C53.6772 18.994 53.9736 18.74 54.3305 18.6193C55.1288 18.2927 55.9612 18.0566 56.812 17.9154C58.0296 17.7613 58.7284 18.7529 59.5144 19.4567C59.6326 19.5595 59.4476 20.3353 59.237 20.4329C58.0502 20.9672 56.812 21.4039 55.7896 21.7995Z"
        fill={color}
      />
      <Path
        d="M21.2852 11.0667C21.393 9.92614 21.4598 9.13493 22.5799 9.11438C22.8676 9.11438 23.1501 8.87805 23.443 8.77529C25.1127 8.1896 26.2327 8.48246 27.3835 9.76173C27.7689 10.1882 27.8716 10.6762 27.327 10.9331C25.683 11.7089 24.0698 12.8392 22.1226 11.9093C21.7475 11.7192 21.465 11.2517 21.2852 11.0667Z"
        fill={color}
      />
      <Path
        d="M25.497 5.42578C26.6581 5.42578 27.3671 5.93954 27.1719 6.51496C26.9938 7.11336 26.5954 7.62195 26.0571 7.9381C25.4765 8.20012 24.6442 7.13149 24.747 6.17075C24.7829 5.83166 25.3429 5.54908 25.497 5.42578Z"
        fill={color}
      />
      <Path
        d="M57.4994 14.8589C58.6194 14.8229 59.3027 15.1877 59.1948 15.9172C59.1163 16.2299 58.9703 16.5217 58.7671 16.772C58.5638 17.0223 58.3082 17.225 58.0183 17.366C57.4788 17.6024 56.59 16.3745 56.7493 15.537C56.8109 15.2031 57.3761 14.9616 57.4994 14.8589Z"
        fill={color}
      />
      <Path
        d="M30.7283 7.27556C30.5844 8.12841 29.67 9.25869 29.2333 9.04291C28.7668 8.79041 28.4141 8.36971 28.2468 7.86638C28.0722 7.27042 28.8839 6.28398 29.3925 6.41756C29.8813 6.62931 30.3325 6.91909 30.7283 7.27556Z"
        fill={color}
      />
      <Path
        d="M60.2441 17.5608C60.2801 16.5333 60.9737 15.6496 61.4977 15.8551C61.7391 15.9582 61.9578 16.1079 62.1412 16.2957C62.3246 16.4835 62.4691 16.7057 62.5664 16.9494C62.7462 17.5248 61.6673 18.6757 61.21 18.4907C60.8326 18.244 60.505 17.9286 60.2441 17.5608Z"
        fill={color}
      />
      <Path
        d="M54.3354 15.7269C54.4762 15.7127 54.6184 15.7277 54.7531 15.771C54.8877 15.8143 55.012 15.885 55.1181 15.9785C55.2242 16.0721 55.3099 16.1866 55.3697 16.3148C55.4295 16.443 55.4622 16.5821 55.4657 16.7236C55.5325 17.1911 54.6745 17.8795 54.1197 17.7254C53.9334 17.6547 53.7673 17.5396 53.6356 17.3901C53.504 17.2406 53.4109 17.0611 53.3644 16.8674C53.3439 16.3639 53.4004 15.6806 54.3354 15.7269Z"
        fill={color}
      />
      <Path
        d="M20.9141 7.35669C21.5049 6.87889 21.8183 6.44219 22.2139 6.32916C22.3586 6.28314 22.5125 6.27386 22.6616 6.30217C22.8108 6.33049 22.9505 6.39551 23.0683 6.49136C23.1861 6.5872 23.2781 6.71085 23.3362 6.85115C23.3942 6.99146 23.4163 7.14402 23.4007 7.29504C23.4007 8.04 22.7482 8.32257 22.1471 8.27119C21.808 8.26605 21.4998 7.81908 20.9141 7.35669Z"
        fill={color}
      />
      <Path
        d="M29.6293 29.7168C30.9959 29.7682 31.7358 30.544 32.4858 31.2581C32.541 31.4243 32.5548 31.6014 32.5261 31.7742C32.4975 31.9469 32.4273 32.1101 32.3214 32.2497C30.662 33.0306 29.0436 34.1455 27.0399 33.2258C26.7685 33.1394 26.5418 32.9501 26.4083 32.6984C26.2748 32.4468 26.2452 32.1529 26.3258 31.8797C26.4542 31.3146 26.3977 30.6262 27.2814 30.4618C28.0801 30.2674 28.8646 30.0185 29.6293 29.7168Z"
        fill={color}
      />
      <Path
        d="M32.4177 28.0361C31.9655 28.4625 31.5802 29.0637 31.0459 29.2589C30.5116 29.4541 29.6485 28.3084 29.7255 27.4247C29.7975 26.6387 30.491 26.7414 31.0253 26.7363C31.3756 26.747 31.7101 26.8849 31.9663 27.124C32.2224 27.3632 32.3829 27.6874 32.4177 28.0361Z"
        fill={color}
      />
      <Path
        d="M33.2461 29.4081C33.3077 28.3806 34.0013 27.5226 34.5254 27.7332C34.7615 27.8397 34.974 27.9923 35.1504 28.182C35.3269 28.3716 35.4637 28.5946 35.5529 28.8378C35.7173 29.4543 34.6487 30.5589 34.1863 30.338C33.817 30.0902 33.4979 29.7747 33.2461 29.4081Z"
        fill={color}
      />
      <Path
        d="M27.6442 27.5999C27.8879 27.6491 28.1056 27.785 28.2567 27.9825C28.4079 28.1799 28.4823 28.4255 28.4662 28.6737C28.4662 29.1463 27.5517 29.8091 27.0482 29.5882C26.8726 29.4747 26.7244 29.3237 26.6142 29.146C26.5041 28.9683 26.4347 28.7684 26.4112 28.5606C26.3701 28.016 26.5704 27.5023 27.6442 27.5999Z"
        fill={color}
      />
    </Svg>
  );
};

export default ThreeButtons;
