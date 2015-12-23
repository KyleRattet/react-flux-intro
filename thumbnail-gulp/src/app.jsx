var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData : [{
  title: 'Show Courses',
  number: 32,
  header: 'Learn React',
  description: 'React is a fanastic new library.',
  imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
  },{
  title: 'See Tutorials',
  number: 25,
  header: 'Learn Gulp',
  description: 'Gulp will speed up your development workflow.Gulp will speed up your development workflow.',
  imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  }]
};


var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
