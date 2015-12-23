(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/KyleRattet/Documents/Practice/react-js-flux/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/KyleRattet/Documents/Practice/react-js-flux/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS3lsZVJhdHRldC9Eb2N1bWVudHMvUHJhY3RpY2UvcmVhY3QtanMtZmx1eC90aHVtYm5haWwtZ3VscC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLEVBQUUsSUFBSSxPQUFPLEdBQUc7SUFDWixhQUFhLEdBQUcsQ0FBQztJQUNqQixLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsRUFBRTtJQUNWLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFdBQVcsRUFBRSxrQ0FBa0M7SUFDL0MsUUFBUSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0YsS0FBSyxFQUFFLGVBQWU7SUFDdEIsTUFBTSxFQUFFLEVBQUU7SUFDVixNQUFNLEVBQUUsWUFBWTtJQUNwQixXQUFXLEVBQUUsNEZBQTRGO0lBQ3pHLFFBQVEsRUFBRSxxRUFBcUU7S0FDOUUsQ0FBQztBQUNOLEdBQUcsQ0FBQztBQUNKOztFQUVFLDhDQUE4QztFQUM5QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztFQUMxRCxvRUFBb0U7RUFDcEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgdGh1bWJuYWlsRGF0YSA6IFt7XG4gICAgdGl0bGU6ICdTaG93IENvdXJzZXMnLFxuICAgIG51bWJlcjogMzIsXG4gICAgaGVhZGVyOiAnTGVhcm4gUmVhY3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgYSBmYW5hc3RpYyBuZXcgbGlicmFyeS4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvaW1nL2xvZ29fb2cucG5nJ1xuICAgIH0se1xuICAgIHRpdGxlOiAnU2VlIFR1dG9yaWFscycsXG4gICAgbnVtYmVyOiAyNSxcbiAgICBoZWFkZXI6ICdMZWFybiBHdWxwJyxcbiAgICBkZXNjcmlwdGlvbjogJ0d1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93Lkd1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LicsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ3VscGpzL2FydHdvcmsvbWFzdGVyL2d1bHAtMngucG5nJ1xuICAgIH1dXG4gIH07XG5cblxuICAvL3JlYWN0LCBwbGVhc2UgcmVuZGVyIHRoaXMgY2xhc3MsIGluc3RhbmNlIG9mXG4gIHZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcbiAgLy9yZWFjdCwgYWZ0ZXIgeW91IHJlbmRlciB0aGlzIGNsYXNzLCBwbGVhc2UgcGxhY2UgaXQgaW4gbXkgYm9keSB0YWdcbiAgUmVhY3QucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKSk7XG4iXX0=
