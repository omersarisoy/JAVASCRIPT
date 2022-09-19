function titleCase(str) {
    return str.split(" ").map(item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()).join().replaceAll(",", " ")
}
  
  titleCase("I'm a little tea pot");