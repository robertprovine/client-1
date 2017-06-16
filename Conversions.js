const Conversions = {

  maps: {
    backgroundColor: this.toRGBA,
    color: this.toRGBA,
  },

  toRGBA: function (rgba) {
    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
  },

};

export default Conversions;
