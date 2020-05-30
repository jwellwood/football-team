import { library } from '@fortawesome/fontawesome-svg-core';
// import icons
import {
  // faStar as faStarOutline,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  // NavList
  faHome,
  faListUl,
  faUserFriends,
  faShieldAlt,
  faChartPie,
  faQuestionCircle,
  faUser,
  faUserCog,
  faSignInAlt,
  faSignOutAlt,
  // Stats
  faFutbol,
  faStar as faStarSolid,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faArrowDown,
  faAdjust,
  faStickyNote,
  // Awards
  faTrophy,
  faMedal,
  faCertificate,
  // Other
  faPen,
  faPlus,
  faTrash,
  faCamera,
  faCog,
  faGlobeAmericas,
  faBookmark,
  faExclamationCircle,
  faCheck,
  faTimes,
  faLock,
  faMinus,
  faChevronRight,
  faLandmark,
  faChartLine,
  faBars,
  faPercent,
  faMonument,
  faChevronDown,
  faChevronUp,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  // NavList
  faBars, //              - menu
  faHome, //              - home
  faListUl, //            - results
  faUserFriends, //       - squad
  faShieldAlt, //         - team
  faChartPie, //          - result stats
  faChartLine, //         - player stats
  faQuestionCircle, //    - about
  faUser, //              - profile
  faUserCog, //           - admin
  faSignInAlt, //         - sign in
  faSignOutAlt, //        - sign out
  // Stats
  faCheckCircle, //       - app
  faFutbol, //            - goal
  faArrowAltCircleUp, //  - assist
  faArrowAltCircleDown, // - conc
  faArrowDown, //         - ogs
  faStickyNote, //        - cards
  faStarSolid, //         - mvp
  faAdjust, //            - pens
  faTimes, //             - missed pen
  faPercent, //           - percentage
  // Awards
  faTrophy, //            - trophy
  faMedal, //             - runner up
  faCertificate, //       - position
  faLandmark, //          - hall of fame
  faMonument, //          - previous seasons
  // Other
  faCamera, //            - image
  faPlus, //              - add
  faMinus, //             - minus
  faPen, //               - edit
  faCog, //               - settings
  faExclamationCircle, // - warning
  faGlobeAmericas, //     - location
  faBookmark, //          - league
  faTrash, //             - delete
  faCheck, //             - true
  faChevronRight, //      - rioght
  faTimes, //             - false
  faLock, //              - locked
  faChevronDown,
  faChevronUp,
  faArrowLeft
  // more icons go here
);
