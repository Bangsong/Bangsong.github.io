require=function e(c,t,o){function n(a,i){if(!t[a]){if(!c[a]){var s="function"==typeof require&&require;if(!i&&s)return s(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[a]={exports:{}};c[a][0].call(l.exports,function(e){var t=c[a][1][e];return n(t||e)},l,l.exports,e,c,t,o)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({GameLogoControll:[function(e,c,t){"use strict";cc._RF.push(c,"5e3daQy9NVIpoyOGD858X/y","GameLogoControll"),cc.Class({extends:cc.Component,properties:{bar:{type:cc.ProgressBar,default:null}},onLoad:function(){cc.director.preloadScene("GameStart")},updateBar:function(e){var c=this.bar.progress;c<1?c+=1*e:cc.director.loadScene("GameStart"),this.bar.progress=c},update:function(e){this.updateBar(e)}}),cc._RF.pop()},{}],GameMainControll:[function(e,c,t){"use strict";cc._RF.push(c,"d91bf1wXiVA2pSBJ0yZo0ZN","GameMainControll"),cc.Class({extends:cc.Component,properties:{bgAudio:{url:cc.AudioClip,default:null},playerPre:{type:cc.Prefab,default:null},npcPre:{type:cc.Prefab,default:null},npcNewTime:{type:cc.Float,default:.9},playerY:{type:cc.Integer,default:-233},_gameHeight:345,boomAudio:{url:cc.AudioClip,default:null},heartPre:{type:cc.Prefab,default:null},heartX:{type:cc.Integer,default:-453},heartY:{type:cc.Integer,default:-285},heartBronkenPre:{type:cc.Prefab,default:null},heartCount:{type:cc.Integer,default:3},scoreNodeGroupPre:{type:cc.Prefab,default:null}},init:function(){this.player=cc.instantiate(this.playerPre),this.node.addChild(this.player);var e=this.node.width/2-40,c=cc.randomMinus1To1()*e;this.player.setPosition(cc.p(c,this.playerY));var t=this.heartX+60*this.newHeart();this.scoreGroup=cc.instantiate(this.scoreNodeGroupPre),this.node.addChild(this.scoreGroup),this.scoreGroup.setPosition(cc.p(t,this.heartY)),this.scoreGroup.children[1].string=0},newNpc:function(){this.npc=cc.instantiate(this.npcPre),this.node.addChild(this.npc);var e=this.node.width/2-40,c=cc.randomMinus1To1()*e;this.npc.setPosition(cc.p(c,this._gameHeight))},newHeart:function(){for(var e=0;e<this.heartCount;)this.heart=cc.instantiate(this.heartPre),this.node.addChild(this.heart),this.heart.setPosition(cc.p(this.heartX+47*e++,this.heartY));return e},onLoad:function(){cc.director.getCollisionManager().enabled=!0,cc.director.preloadScene("GameOver"),cc.audioEngine.play(this.bgAudio,!0,.5),this.init(),cc.director.getScheduler().schedule(function(){this.newNpc()},this,this.npcNewTime)},update:function(e){(!cc.find("Canvas/heart")||this.player.y>this.node.height/2)&&(cc.sys.localStorage.setItem("score",cc.find("Canvas/scoreNode/score").getComponent(cc.Label).string),cc.director.loadScene("GameOver"))}}),cc._RF.pop()},{}],GameOverControll:[function(e,c,t){"use strict";cc._RF.push(c,"6798eBIjWFPPa/CNpUEy/ef","GameOverControll"),cc.Class({extends:cc.Component,properties:{gameOverAudio:{url:cc.AudioClip,default:null},agaginBtn:{type:cc.Node,default:null},scorGroup:{type:cc.Node,default:null}},actionAll:function(){var e=cc.scaleTo(1,.7,.7),c=cc.scaleTo(1,1,1),t=cc.sequence(e,c),o=cc.repeatForever(t);this.agaginBtn.runAction(o);var n=cc.rotateBy(3,360),o=cc.repeatForever(n);this.agaginBtn.runAction(o);var r=cc.rotateBy(1,13),a=cc.rotateTo(1,13),i=cc.sequence(r,a),s=cc.repeatForever(i);this.scorGroup.runAction(s)},againControll:function(){this.agaginBtn.on("touchstart",function(){cc.audioEngine.stopAll(),cc.director.loadScene("GameMain")})},onLoad:function(){cc.director.preloadScene("GameMain"),cc.audioEngine.stopAll(),cc.audioEngine.play(this.gameOverAudio,!1,.5),cc.find("Canvas/score_Group/score").getComponent(cc.Label).string="最终得分："+cc.sys.localStorage.getItem("score"),this.actionAll(),this.againControll()}}),cc._RF.pop()},{}],GameStartControll:[function(e,c,t){"use strict";cc._RF.push(c,"ae1a1n0HPZH66bBC8xtlkwK","GameStartControll"),cc.Class({extends:cc.Component,properties:{bgAduio:{url:cc.AudioClip,default:null},title_endlish:{type:cc.Node,default:null},TLGB:{type:cc.Node,default:null},skeleton:{type:cc.Node,default:null},startBtn:{type:cc.Node,default:null}},action:function(){var e=cc.fadeOut(1),c=cc.fadeIn(1),t=cc.scaleTo(1,.7,.8),o=cc.scaleTo(1,.8,.9),n=cc.sequence(t,e,c,o),r=cc.repeatForever(n);this.title_endlish.runAction(r);var a=cc.rotateBy(4,360),i=(cc.rotateBy(1,0),cc.repeatForever(a));this.TLGB.runAction(i);var s=cc.rotateTo(.5,15),u=cc.rotateTo(.5,-15),l=cc.sequence(s,u),d=cc.repeatForever(l);this.skeleton.runAction(d);var p=cc.rotateTo(1,20),h=cc.rotateTo(1,-20),f=cc.sequence(p,h),m=cc.repeatForever(f);this.startBtn.runAction(m)},onLoad:function(){cc.audioEngine.play(this.bgAduio,!0,.5),this.action()}}),cc._RF.pop()},{}],Heart:[function(e,c,t){"use strict";cc._RF.push(c,"04c9eeqttFG4aSY/zhz7PkX","Heart"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],Npc:[function(e,c,t){"use strict";cc._RF.push(c,"296e0ykWC5N0oc4R1bthx4J","Npc");var o=e("Heart");cc.Class({extends:cc.Component,properties:{boomAudio:{url:cc.AudioClip,default:null},heartDestroyAudio:{url:cc.AudioClip,default:null},floorY:{type:cc.Integer,default:-233}},npcAction:function(){var e=cc.scaleTo(.1,.8,.9),c=cc.scaleTo(.1,1,1),t=cc.sequence(e,c);this.node.runAction(cc.repeatForever(t))},onLoad:function(){this.npcAction()},onCollisionEnter:function(e){cc.audioEngine.play(this.boomAudio,!1,.5),this.node.destroy();var c=cc.find("Canvas/scoreNode/score").getComponent(cc.Label);c.string=parseInt(c.string)+1},update:function(e){cc.random0To1();if(--this.node.y<=this.floorY){this.node.destroy(),cc.audioEngine.play(this.heartDestroyAudio,!1,.5);var c=cc.find("Canvas/heart");c&&c.getComponent(o).node.destroy()}}}),cc._RF.pop()},{Heart:"Heart"}],PageViewControll:[function(e,c,t){"use strict";cc._RF.push(c,"a9beb/cxE9F6IU5sR+bysCn","PageViewControll"),cc.Class({extends:cc.Component,properties:{pageView:{type:cc.Node,default:null},startBtn:{type:cc.Node,default:null},progressBar:{type:cc.ProgressBar,default:null}},startBtnControll:function(){var e=this;this.startBtn.on(cc.Node.EventType.TOUCH_START,function(){var c=cc.scaleTo(1,.8,.9),t=cc.scaleTo(1,1,1),o=cc.sequence(c,t);e.startBtn.runAction(o),e.progressBar.node.runAction(cc.show()),e.barFlag=!0})},updateBar:function(e){var c=this.progressBar.progress;c<1?c+=1*e:cc.director.loadScene("GameMain"),this.progressBar.progress=c},onLoad:function(){cc.audioEngine.stopAll(),cc.director.preloadScene("GameMain"),this.barFlag=!1,this.progressBar.node.runAction(cc.hide()),this.startBtnControll()},update:function(e){this.barFlag&&this.updateBar(e)}}),cc._RF.pop()},{}],Player:[function(e,c,t){"use strict";cc._RF.push(c,"72d38QWVwBBJqsn/MHkCeb9","Player");var o=e("GameMainControll");cc.Class({extends:cc.Component,properties:{jumpAudio:{url:cc.AudioClip,default:null},touchAudio:{url:cc.AudioClip,default:null},jumpHeight:{type:cc.Integer,default:90},moveSpeed:{type:cc.Integer,default:40},moveJump:{type:cc.Integer,default:10},playerY:{type:cc.Integer,default:-233},_toucheTime:1,_bound:464},playerControll:function(){var e=this,c=cc.director.getScheduler();c.schedule(function(){e._toucheTime++},e,.2);var t,n=cc.scaleTo(.5,.7,.8),r=cc.scaleTo(.3,.8,.9),a=cc.repeatForever(cc.sequence(n,r));e.node.on(cc.Node.EventType.TOUCH_START,function(){e._toucheTime=1,c.resumeTarget(e),e.node.runAction(a),t=cc.audioEngine.play(e.touchAudio,!0,.5),c.unscheduleUpdateForTarget(e)}),e.node.on(cc.Node.EventType.TOUCH_END,function(){var o=e.jumpHeight*e._toucheTime;c.pauseTarget(e),cc.audioEngine.stop(t),e.node.stopAction(a);var n=cc.scaleTo(.2,1,1);e.node.runAction(n),cc.audioEngine.play(e.jumpAudio,!1,.5);var r=cc.moveBy(.5,0,o),i=cc.moveBy(.45,0,-o);e.node.runAction(cc.sequence(r,i))}),e.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){var o=e.jumpHeight*e._toucheTime;c.pauseTarget(e),cc.audioEngine.stop(t),e.node.stopAction(a);var n=cc.scaleTo(.2,1,1);e.node.runAction(n),cc.audioEngine.play(e.jumpAudio,!1,.5);var r=cc.moveBy(.5,0,o),i=cc.moveBy(.45,0,-o);e.node.runAction(cc.sequence(r,i))});var i=cc.find("Canvas").getComponent(o),s={event:cc.EventListener.TOUCH_ONE_BY_ONE,onTouchBegan:function(c,t){var o=t.getCurrentTarget().convertToNodeSpace(c.getLocation()),n=e.node.x,r=-i.node.width/2+15,a=i.node.width/2-15;if(o.x>40&&n<a){l=(l=e._bound-(n+e.moveSpeed))<0?e.moveSpeed+l:e.moveSpeed,cc.audioEngine.play(e.jumpAudio,!1,.5);var s=cc.moveBy(.1,cc.p(l,e.moveJump)),u=cc.moveBy(.2,cc.p(0,-e.moveJump));e.node.runAction(cc.sequence(s,u))}if(o.x<0&&n>r){var l=n-e.moveSpeed+e._bound;l=l<0?e.moveSpeed+l:e.moveSpeed,cc.audioEngine.play(e.jumpAudio,!1,.5);var s=cc.moveBy(.1,cc.p(-l,e.moveJump)),u=cc.moveBy(.2,cc.p(0,-e.moveJump));e.node.runAction(cc.sequence(s,u))}return!0}};cc.eventManager.addListener(s,e.node)},onCollisionEnter:function(e){if(this.node.y<this.playerY+3){var c=cc.find("Canvas/scoreNode/score").getComponent(cc.Label);c.string=parseInt(c.string)-1,cc.sys.localStorage.setItem("score",c.string),cc.director.loadScene("GameOver")}},onLoad:function(){cc.director.preloadScene("GameOver"),this.playerControll()}}),cc._RF.pop()},{GameMainControll:"GameMainControll"}],StartBtnControll:[function(e,c,t){"use strict";cc._RF.push(c,"41a1fVT/OBNP46k+Q9lLfmy","StartBtnControll"),cc.Class({extends:cc.Component,properties:{},startBtnControll:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(){cc.audioEngine.stopAll(),cc.director.loadScene("GameExplain")})},onLoad:function(){cc.director.preloadScene("GameExplain"),this.startBtnControll()}}),cc._RF.pop()},{}],StartGame:[function(e,c,t){"use strict";cc._RF.push(c,"1d5e1RE+SxKKolQ5/Whcq3O","StartGame"),cc.Class({extends:cc.Component,properties:{},startControll:function(){var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(){var c=cc.scaleTo(1,.8,.9),t=cc.scaleTo(1,1,1),o=cc.fadeOut(2),n=cc.sequence(c,t,o);e.node.runAction(n)})},onLoad:function(){cc.director.preloadScene("GameMain"),this.startControll()}}),cc._RF.pop()},{}]},{},["GameLogoControll","GameMainControll","GameOverControll","GameStartControll","Heart","Npc","PageViewControll","Player","StartBtnControll","StartGame"]);