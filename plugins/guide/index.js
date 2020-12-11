// import Vue from 'vue';
// import Driver from 'driver.js'; // import driver.js
// import 'driver.js/dist/driver.min.css'; // import driver.js css

// export default (context, inject) => {
//     const { store, redirect } = context;
//     const driver = new Driver({
//         className: 'scoped-class',
//         animate: true,
//         opacity: 0.75,
//         padding: 10,
//         allowClose: false,
//         overlayClickNext: false,
//         doneBtnText: '完成',
//         closeBtnText: '关闭',
//         nextBtnText: '下一步',
//         prevBtnText: '上一步',
//         onNext: (Element) => {
//             console.log('store.state.guideStep1', store.state.guideStep);
//             if (store.state.guideStep === 2) {
//                 console.log('router', context);
//                 redirect('/home-work/discover-page');
//             }
//             store.commit('nextGuideStep');
//             console.log('store.state.guideStep2', store.state.guideStep);
//             console.log('onNext', Element);
//         },
//         onPrevious: (Element) => {
//             store.commit('backGuideStep');
//             console.log('onPrevious', Element);
//         },
//     });
//     Vue.prototype.$intro = driver;
// };
