var jsonPath = './data/chibalottePlayerData.json';
var jqXHR = $.getJSON(jsonPath);
jqXHR.done(function(json){
  vm.$set('batter', json.chibalotte.batter);
  vm.$set('pitcher', json.chibalotte.pitcher);
});

var viewBatter = Vue.extend({
  template: '#batter-template',
  props:['batter'],
  replace: 'true'
});

var viewPitcher = Vue.extend({
  template: '#pitcher-template',
  props:['pitcher'],
  replace: 'true'
});

var vm = new Vue({
  el: '#content',
  data: {
    currentView: 'view-batter',
    batter: [],
    pitcher: []
  },
  components: {
    'view-batter': viewBatter,
    'view-pitcher': viewPitcher
  },
  methods: {
    toggleDisplay: function(display){
      this.currentView = display;
    }
  }
})
