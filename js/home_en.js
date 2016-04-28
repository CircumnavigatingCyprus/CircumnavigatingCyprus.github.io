---
---
;{% include js/jquery.min.js %}
;{% include js/underscore.min.js %}
;{% include js/leaflet-src.js %}
;{% include js/Leaflet.AwesomeMarkers.min.js %}
;{% include js/owl.carousel.min.js %}
;{% include js/instafeed.min.js %}
;{% include js/instagram.js %}
;{% include js/recent-posts.js %}
;{% include js/twitter-modal.js %}



{% raw %}
var SITE_PROP_LIB = {
  baseurl: "{{site.baseurl}}"
};
{% endraw %}

{% assign currentLanguagePosts = site.posts | where: "language", "en" %}
{% assign currentLanguageMapPosts = currentLanguagePosts | where: "map", true %}
var postsByCategories = {
  {% for category in site.post_categories %}
    '{{category}}' : [
      {% for post in currentLanguageMapPosts %}
        {% if post.categories contains {{category}} %}
          {
            'type': 'Feature',
            'properties': {
              title: "{{ post.title }}",
              image: "{{post.image}}",
              link: "{{site.baseurl}}{{post.url}}",
              teaser: "{{post.teaser}}",
              popupContent: "{{post.popupContent}}",
              date: "{{post.date}}",
              categories: ["{{post.categories | join: '", "'}}"]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                {{ post.lng }},
                {{ post.lat }}
              ]
            }
          },
        {% endif%}
      {% endfor %}
    ],
  {% endfor %}
};


var postCategoriesArray = ['{{site.post_categories | join: "', '"}}'];

var AnnaPostMap = function(){
  var that = this;
  this.layers = _(postCategoriesArray)
                  .map(function(category) {
                        return L.geoJson(
                                          { type: 'FeatureCollection', features: postsByCategories[category] },
                                          { onEachFeature: that._onEachFeature.bind(that),
                                            pointToLayer: that._pointToLayer.bind(that) }
                                        );
                      });

  this.map = L.map('map', {
    center: [35.078770, 33.263956],
    zoom: 9,
    scrollWheelZoom: false,
    layers: this.layers
  });

  L.tileLayer( '{{ site.map-tileset }}', {scrollWheelZoom: false}).addTo(this.map);

  var layerControl = {};
  _.each(postCategoriesArray, function(category, index){
    layerControl[category] = that.layers[index];
  });

  var controlLayers = L.control.layers(null, layerControl, {collapsed: false}).addTo(this.map);

  // this.map.fitBounds(this.geojson.getBounds());
}

function processImageLink(imageLink){
  return imageLink.replace(SITE_PROP_LIB['baseurl'], '{{site.baseurl}}');
}

AnnaPostMap.prototype._onEachFeature = function(feature, layer){
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent){
    var popupContent = this._generatePopupContent(feature);
    layer.bindPopup(popupContent);
  }
};

AnnaPostMap.prototype._pointToLayer = function(feature, latlng){
  var marker = this._getMarker(feature);
  return L.marker(latlng, {icon: marker, title: feature.properties.title});
}

AnnaPostMap.prototype._getMarker = function(feature){
  if (_.include(feature.properties.categories, "interviews")){
    return L.AwesomeMarkers.icon({ icon: 'book', prefix: 'fa', markerColor: 'green'});
  } else if (_.include(feature.properties.categories, "participant photography")){
    return L.AwesomeMarkers.icon({ icon: 'camera-retro', prefix: 'fa', markerColor: 'red'});
  } else if (_.include(feature.properties.categories, "team member updates")){
    return L.AwesomeMarkers.icon({ icon: 'user', prefix: 'fa', markerColor: 'cadetblue'});
  } else if (_.include(feature.properties.categories, "trekking")){
    return L.AwesomeMarkers.icon({ icon: 'binoculars', prefix: 'fa', markerColor: 'darkred'});
  }
}

AnnaPostMap.prototype._generatePopupContent = function(feature){
  return "<div class='map-popup'>" +
            "<a href='" + feature.properties.link + "'>" +
              "<h3 class='title'>" + feature.properties.title + "</h3>" +
              "<h4 class='date'>" + feature.properties.date + "</h4>" +
              "<img src='" + feature.properties.image + "'/>" +
              "<p>" + feature.properties.teaser + "</p>" +
            "</a>" +
          "</div>";
};

(function(){
  var postMap = new AnnaPostMap();
})();