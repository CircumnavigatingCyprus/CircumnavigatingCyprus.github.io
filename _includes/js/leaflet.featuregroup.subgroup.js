/**
 * Leaflet.FeatureGroup.SubGroup creates a Feature Group that adds its child
 * layers into a parent group when added to a map (e.g. through L.Control.Layers).
 * (c) 2015-2016 Boris Seang
 * BSD 2-Clause "Simplified" License
 */
!function(e,r){"function"==typeof define&&define.amd?define(["leaflet"],function(t){return e.L.FeatureGroup.SubGroup=r(t)}):"object"==typeof module&&module.exports?module.exports=r(require("leaflet")):e.L.FeatureGroup.SubGroup=r(e.L)}(this,function(e){var r=e.FeatureGroup,t=r.prototype,o=e.LayerGroup,a=r.EVENTS,i=r.extend({statics:{version:"0.1.1"},initialize:function(e,r){t.initialize.call(this,r),this.setParentGroup(e)},setParentGroup:function(e){var r=e instanceof o;return this._parentGroup=e,this.onAdd=r?"function"==typeof e.addLayers?this._onAddToGroupBatch:this._onAddToGroup:this._onAddToMap,this.onRemove=r?"function"==typeof e.removeLayers?this._onRemoveFromGroupBatch:this._onRemoveFromGroup:this._onRemoveFromMap,this.addLayer=r?this._addLayerToGroup:this._addLayerToMap,this.removeLayer=r?this._removeLayerFromGroup:this._removeLayerFromMap,this},setParentGroupSafe:function(e){var r=this._map;return r&&r.removeLayer(this),this.setParentGroup(e),r&&r.addLayer(this),this},getParentGroup:function(){return this._parentGroup},_onAddToGroupBatch:function(e){var r=this.getLayers();this._map=e,this._parentGroup.addLayers(r)},_onRemoveFromGroupBatch:function(){var e=this.getLayers();this._parentGroup.removeLayers(e),this._map=null},_onAddToGroup:function(e){var r=this._parentGroup;this._map=e,this.eachLayer(r.addLayer,r)},_onRemoveFromGroup:function(){var e=this._parentGroup;this.eachLayer(e.removeLayer,e),this._map=null},_onAddToMap:t.onAdd,_onRemoveFromMap:t.onRemove,_addLayerToGroup:function(e){if(this.hasLayer(e))return this;e.on&&e.on(a,this._propagateEvent,this);var r=this.getLayerId(e);return this._layers[r]=e,this._map&&this._parentGroup.addLayer(e),this._popupContent&&e.bindPopup&&e.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:e})},_removeLayerFromGroup:function(e){if(!this.hasLayer(e))return this;e in this._layers&&(e=this._layers[e]),e.off&&e.off(a,this._propagateEvent,this);var r=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[r]&&this._parentGroup.removeLayer(r),delete this._layers[r],this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:e})},_addLayerToMap:t.addLayer,_removeLayerFromMap:t.removeLayer});return e.featureGroup.subGroup=function(e,t){return new r.SubGroup(e,t)},i});