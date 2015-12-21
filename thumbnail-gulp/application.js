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
  //react, please render this class, instance of
  var element = React.createElement(ThumbnailList, options);
  //react, after you render this class, please place it in my body tag
  React.render(element, document.querySelector('.target'));

  //define a class
  var Badge = React.createClass({displayName: "Badge",
    render: function(){

      return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
      )
    }
  });

  var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function () {
      var list = this.props.thumbnailData.map(function(thumbnailProps){
        return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
      });

      return React.createElement("div", null, 
        list
      )
    }

  });

  var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
      return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {class: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
    }

  });
