class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
    <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer onClick={this.onTitleClick} video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
           <div>
            <VideoList onClick={this.onTitleClick} videos={this.state.videos}/></div>
          </div>
        </div>
    </div>
    );
  }

}
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//        <div>
//         <VideoList videos={exampleVideoData}/></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

