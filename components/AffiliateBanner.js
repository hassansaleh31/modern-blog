// import affiliateLinksModel from '../models/affiliateLinks';
// import React from 'react'

// class AffiliateBanner extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             banner: null,
//             maxWidth: null,
//             width: null,
//             tempid: null
//         }
//         this.updateBanner = this.updateBanner.bind(this);
//     }

//     componentDidMount() {
//         let id = Number(localStorage.getItem('banner_id'))
//         if (!id) {
//             id = 0
//             localStorage.setItem('banner_id', id + 1)
//         }
//         localStorage.setItem('banner_id', id + 1)
//         this.setState(state => ({ tempid: `banner-${id}` }), this.updateBanner)
//         window.addEventListener('resize', this.updateBanner, false)
//     }

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.updateBanner, false)
//     }

//     render() {
//         return (
//             <div id={this.state.tempid} style={{ margin: '1em 0', width: '100%' }}>
//                 <div className="affiliate_banner" style={{ maxWidth: this.state.maxWidth, margin: 'auto' }} dangerouslySetInnerHTML={{ __html: this.state.banner }}></div>
//             </div>
//         )
//     }

//     updateBanner() {
//         const width = document.getElementById(this.state.tempid).clientWidth
//         if (width < 720 && (!this.state.width || this.state.width >= 720)) {
//             // get square banner
//             // set max width to 300px
//             this.setState({ banner: null })
//             this.state.maxWidth = 300;
//             this.state.width = width;
//             affiliateLinksModel.getSquareLinks(1)
//                 .then(res => {
//                     const link = res.link;
//                     link && link.affiliate_link_html
//                         ? (
//                             this.setState(state => ({
//                                 banner: link.affiliate_link_html
//                             }))
//                         )
//                         : (this.setState({ banner: null }))
//                 })
//                 .catch(e => console.error('Error loading square banner'))
//         } else if (width >= 720 && (!this.state.width || this.state.width < 720)) {
//             // get horizontal banner
//             // set max width to 728px
//             this.setState({ banner: null })
//             this.state.maxWidth = 728;
//             this.state.width = width;
//             affiliateLinksModel.getHorizontalLinks(1)
//                 .then(res => {
//                     const link = res.link;
//                     link && link.affiliate_link_html
//                         ? (
//                             this.setState(state => ({
//                                 banner: link.affiliate_link_html
//                             }))
//                         )
//                         : (this.setState({ banner: null }))
//                 })
//                 .catch(e => console.error('Error loading horizontal banner'))
//         }
//     }
// }

// export default AffiliateBanner