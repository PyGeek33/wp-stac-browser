"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[944],{93351:function(a){a.exports=function(a){if(a&&a.length)for(const t of a){let a;switch(t.keyword){case"additionalItems":case"items":a="";var e=t.params.limit;a+="must NOT have more than "+e+" item",1!=e&&(a+="s");break;case"additionalProperties":a="must NOT have additional properties";break;case"anyOf":a='must match a schema in "anyOf"';break;case"const":a="must be equal to constant";break;case"contains":a="must contain a valid item";break;case"dependencies":case"dependentRequired":a="";e=t.params.depsCount;a+="must have propert",a+=1==e?"y":"ies",a+=" "+t.params.deps+" when property "+t.params.property+" is present";break;case"discriminator":switch(t.params.error){case"tag":a='tag "'+t.params.tag+'" must be string';break;case"mapping":a='value of tag "'+t.params.tag+'" must be in oneOf';break;default:a='must pass "'+t.keyword+'" keyword validation'}break;case"enum":a="must be equal to one of the allowed values";break;case"false schema":a="boolean schema is false";break;case"format":a='must match format "'+t.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":a="";var s=t.params.comparison+" "+t.params.limit;a+="must be "+s;break;case"formatMinimum":case"formatExclusiveMinimum":a="";s=t.params.comparison+" "+t.params.limit;a+="must be "+s;break;case"if":a='must match "'+t.params.failingKeyword+'" schema';break;case"maximum":case"exclusiveMaximum":a="";s=t.params.comparison+" "+t.params.limit;a+="must be "+s;break;case"maxItems":a="";e=t.params.limit;a+="must NOT have more than "+e+" item",1!=e&&(a+="s");break;case"maxLength":a="";e=t.params.limit;a+="must NOT be longer than "+e+" character",1!=e&&(a+="s");break;case"maxProperties":a="";e=t.params.limit;a+="must NOT have more than "+e+" propert",a+=1==e?"y":"ies";break;case"minimum":case"exclusiveMinimum":a="";s=t.params.comparison+" "+t.params.limit;a+="must be "+s;break;case"minItems":a="";e=t.params.limit;a+="must NOT have less than "+e+" item",1!=e&&(a+="s");break;case"minLength":a="";e=t.params.limit;a+="must NOT be shorter than "+e+" character",1!=e&&(a+="s");break;case"minProperties":a="";e=t.params.limit;a+="must NOT have less than "+e+" propert",a+=1==e?"y":"ies";break;case"multipleOf":a="must be a multiple of "+t.params.multipleOf;break;case"not":a='must NOT be valid according to schema in "not"';break;case"oneOf":a='must match exactly one schema in "oneOf"';break;case"pattern":a='must match pattern "'+t.params.pattern+'"';break;case"patternRequired":a='must have property matching pattern "'+t.params.missingPattern+'"';break;case"propertyNames":a="property name is invalid";break;case"required":a="must have required property "+t.params.missingProperty;break;case"type":a="must be "+t.params.type;break;case"unevaluatedItems":a="";e=t.params.len;a+="must NOT have more than "+e+" item",1!=e&&(a+="s");break;case"unevaluatedProperties":a="must NOT have unevaluated properties";break;case"uniqueItems":a="must NOT have duplicate items (items ## "+t.params.j+" and "+t.params.i+" are identical)";break;default:a='must pass "'+t.keyword+'" keyword validation'}t.message=a}}},90944:function(a,e,s){s.r(e),e["default"]=s(93351)}}]);
//# sourceMappingURL=944.1737e657.js.map