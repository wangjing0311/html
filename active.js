var temlate_head = ''
+'<div class="head">'
+'           <div class="head-content-title">'
+'               <img class="head-content-title-photo" src="{0}<!--http://www.easyicon.net/api/resizeApi.php?id=11454&size=64-->"/>'
+'               <h2 class="head-content-title-name">{1}<!--我的标题可是很长的奥--></h2>'
+'               <span class="head-content-title-time">{2}<!--07-05 15:07--></span>'
+'           </div>'
+'           <p class="head-content-content">'
+'               <span class="head-content-content-title">{3}<!--我可是这个的内容，一段，二段，三段--></span>'
+'               <img class="head-content-content-photo" src="{4}<!--https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58-->"/>'
+'           </p> '
+'           <div class="head-content-bottom">'
+'               <div class="head-content-bottom-person">'
+'                   <img src="http://cdn-img.easyicon.net/png/11985/1198584.gif"/>'
+'                   <span>{5}<!--王老师--></span>'
+'               </div>'
+'               <div class="head-content-bottom-right">'
+'                   <div class="head-content-bottom-see">'
+'                       <img src="http://cdn-img.easyicon.net/png/11971/1197101.gif"/>'
+'                       <span>{6}<!--5--></span>'
+'                   </div>'
+'                   <div class="head-content-bottom-message">'
+'                       <img src="http://cdn-img.easyicon.net/png/11948/1194804.gif"/>'
+'                       <span>{7}<!--12--></span>'
+'                   </div>'
+'               </div>'
+'           </div>'
+'</div>'
+'';
var template = ''
+ '            <div class="list-item">                                                                                                                        '
+ '                <div class="list-item-title">                                                                                                              '
+ '                    <img class="list-item-title-photo" src="{0}<!--http://www.baidu.com/favicon.ico-->"/>                                                  '
+ '                    <div class="list-item-title-nameinfo">                                                                                                 '
+ '                        <span class="list-item-title-name">{1}<!--王静--></span>                                                                             '
+ '                        <div class="list-item-title-time">                                                                                                 '
+ '                            <span class="list-item-title-floor">#{2}</span>                                                                                '
+ '                            <span class="list-item-title-time">{3}<!--今天12:12--></span>                                                                    '
+ '                        </div>                                                                                                                             '
+ '                    </div>                                                                                                                                 '
+ '                    <div class="list-item-title-like">                                                                                                     '
+ '                        <img class="list-item-title-likeimg" src="http://www.easyicon.net/api/resizeApi.php?id=1202676&size=64"/>                '
+ '                        <span class="list-item-title-likenum">{4}<!--5--></span>                                                                           '
+ '                    </div>                                                                                                                                 '
+ '                    <div class="head-content-content-list">                                                                                                '
+ '                        <span class="head-content-content-list-title">{5}<!--回复内容--></span>                                                                '
+ '                        {6}                                                                                                                                '
+ '                        <!--<div class="head-content-content-list-gridview">                                                                               '
+ '                            <img class="head-content-content-list-photo" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/> '
+ '                            <img class="head-content-content-list-photo2" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                            <img class="head-content-content-list-photo3" src="http://img0.imgtn.bdimg.com/it/u=921360641,2037125353&fm=15&gp=0.jpg"/>     '
+ '                            <img class="head-content-content-list-photo4" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                            <img class="head-content-content-list-photo5" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                            <img class="head-content-content-list-photo6" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                            <img class="head-content-content-list-photo7" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                            <img class="head-content-content-list-photo8" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                            <img class="head-content-content-list-photo9" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58"/>'
+ '                        </div>-->                                                                                                                          '
+ '                    </div>                                                                                                                                 '
+ '                </div>                                                                                                                                     '
+ '           </div>                                                                                                                                          '
+ '';

var template_grid = '<div class="head-content-content-list-gridview">{0}</div>';
var template_img = '<img style="width: {1}px; height: {1}px;" class="head-content-content-list-photo" src="{0}"/> ';


function loadHeadData(){
	var json ='{"titlePhoto":"http://www.easyicon.net/api/resizeApi.php?id=11454&size=64","titleName":"我是标题","titleTime":"07-05 15:07","titleContent":"我是内容长。。。。。。。。。。。。。。。。。。。。。","titleConPic":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58","titleBtmTeacher":"laoshi","titleBtmSeeNum":"5","titleBtmMessNum":"12"}';
	var jsObj = JSON.parse(json);
	var result = temlate_head.format(jsObj.titlePhoto,jsObj.titleName,jsObj.titleTime,jsObj.titleContent,jsObj.titleConPic,jsObj.titleBtmTeacher,jsObj.titleBtmSeeNum,jsObj.titleBtmMessNum);
	var head = document.getElementById("content_head");
	head.innerHTML = result;
}

function loadData(){
     var json = '['+'{"headPhoto":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082721491,3981845853&fm=58","name":"wangjing","floor":1,"time":"今天 12:03","likenum":3,"replayContent":"我是回复内容奥。。。。我的内容足够长吧，嘻嘻，哈哈，嘿嘿，呵呵...","replayPics":["http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg"]},'.repeat(30)+'{"headPhoto":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=810896649,3751303857&fm=116&gp=0.jpg","name":"wangjing","floor":31,"time":"07-23 12:03","likenum":31,"replayContent":"我是回复内容奥","replayPics":["http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg","http://img01.youxiaoshuo.com/portal/201608/03/115719yj81k19j180s74gp.jpg"]}]';
     var jsArr = JSON.parse(json);

     var results = [];

	 var imgSize = (window.innerWidth-150)/3;
     jsArr.forEach(function(item){
     	      var imgItem = [];
     	      var pics = item.replayPics;

     	      var gridResult = '';
				  pics.forEach(function(item){
					imgItem.push(template_img.format(item,imgSize));
				  });
				  gridResult = template_grid.format(imgItem.join(''));
              var result = template.format(item.headPhoto,item.name,item.floor,item.time,item.likenum,item.replayContent,gridResult);  
              results.push(result); 
             
     });

     var list = document.getElementById("content_list");
     list.innerHTML = results.join('');

}


  function start(){
            var data;

            var Chapter, PageInfo;

            Chapter = (function() {
              function Chapter(id, pid, type, level, orderNo, name) {
                this.id = id;
                this.pid = pid;
                this.type = type;
                this.level = level;
                this.orderNo = orderNo;
                this.name = name;
                this.chapters = [];
             }

              return Chapter;

            })();

            PageInfo = (function() {
              function PageInfo(isChapter, id, pageOrder, file) {
                this.isChapter = isChapter;
                this.id = id;
                this.pageOrder = pageOrder;
                this.file = file;
              }

              return PageInfo;

            })();

            var chapterPageInfo = document.getElementById('logs').value;
            var value = document.getElementById('chapters').value;
            
            document.getElementById('logs').value = localStorage.logs = chapterPageInfo;
            document.getElementById('chapters').value = localStorage.chapters = value;

            var datas = JSON.parse(value).data;
            // var datas = data.split('\n');
            var infos = chapterPageInfo.split('\n');

            var chapters = [];
            var pageInfos = {};

            datas.forEach(function(item){
                   chapters.push(new Chapter(item.id,item.parent_id,item.type,item.level,item.display_order,item.name));
            });

            infos.forEach(function(item){
                if(item.indexOf('pageId') < 0) return;
                var props = item.split(',');
                var s1 = props[0].split('：')[1]; // isChapter
                var s2 = props[1].split(':')[1];  // pageId
                var s3 = props[2].split(':')[1];  // pageOrder
                var s4 = props[3].split(':')[1];  // file
            //     pageInfos.push(new PageInfo(!(s1=='page'),s2,s3,s4));
                pageInfos[s2] = new PageInfo(!(s1=='page'),s2,s3,s4)
            });

            var tem = '';
            chapters.forEach(function(item){
                tem += item.orderNo + ' ';
            });
            console.log(tem);

            chapters.sort(function(l, h){
                return parseInt(l.orderNo) - parseInt(h.orderNo);
            });

            tem = '';
            chapters.forEach(function(item){
                tem += item.orderNo + ' ';
            });

            console.log(tem);

            function addSubChapters(P){
                chapters.forEach(function(c){
                if(c.pid == P.id){
            //         console.log('root - ' + c.id + '   ' + c.name );
                        P.chapters.push(c);
                        addSubChapters(c);
                    }
                });
            }

            chapters.forEach(function(c){
                if(!c.pid){
                    console.log('root - ' + c.id + '   ' + c.name );
                    addSubChapters(c);
                    console.dir(c);
                }
            });

            var results = [];
            var treeLines = [];

            function showSubTree(P, level){
                var s = '';
                var type = '未知';
                for(var i=0;i<level;i++){
                    s += '　　　';
                }
                switch(P.type){
                    case 1:
                        s+="章节 ";
                        type = '章节';
                        break;
                    case 2:
                        s+="页面 ";
                        type = '页面';
                        break;
                    defaule:
                        s+="未知 ";
                        type = '未知';
                        break;
                }

                s += " " + P.id + " " + P.name + ' ' + ((ref = pageInfos[P.id]) != null ? ref.file : void 0) 
                  + ' ' + ((ref1 = pageInfos[P.id]) != null ? ref1.isChapter : void 0);
                if(type=="页面"){
                    results.push({
                        'level'     : level,
                        'type'      : type,
                        'id'        : P.id,
                        'name'      : P.name,
                        'isChapter' : ((ref1 = pageInfos[P.id]) != null ? ref1.isChapter : void 0),
                        'file'      : ((ref = pageInfos[P.id]) != null ? ref.file : void 0)

                    });
                }
                console.log(s);
                treeLines.push(s);
                P.chapters.forEach(function(item){
                    showSubTree(item, level+1);
                });
            }

            chapters.forEach(function(c){
                if(!c.pid){
                    console.log('root - ' + c.id + '   ' + c.name );
                    showSubTree(c, 1);
                }
            });

            console.table(results);

            out = [];
            results.forEach(function(item){
                out.push({
                    'id'        : item.id,
                    'isChapter' : item.isChapter,
                    'file'      : item.file
                });
            });
            console.log(JSON.stringify(out));
            document.getElementById('mapper').value = JSON.stringify(out);
            document.getElementById('tree').innerText = treeLines.join('\n');
        }


String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.startsWith = function(str) {
	return (this.match("^" + str) == str)
};

String.prototype.endsWith = function(str) {
	return (this.match(str + "$") == str)
};
String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] != 'undefined' ? args[number] : match;
	});
};
String.prototype.repeat = function(num) {
	var str = '';
	for (var i = 0; i < num; i++) {
		str += this;
	}
	return str;
};
