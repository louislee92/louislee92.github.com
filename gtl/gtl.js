var timer = null, timer2 = null;
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
// 配置参数
var size = 2,   // 卡牌初始大小
    fd = 3,     // 卡牌变化幅度
    timerDelay = 1000,  // 定时器（更新频率）间隔
    timerDelay2 = 400, // 定时器（生成卡牌）间隔2
    speed = 20      // 速度
    ;
var imgsrc = 'https://static-yz-cdn.c-t.work/QN_FOG_cowtransfer-file-178e1a9c-2d36-4e1a-a549-b6da0af0f22a%252FBACK.jpg?t-s=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJndWlkK3RpbWVzdGFtcCI6Imlsb3ZlY293dHJhbnNmZXIyMDIxXzE2Mzk4ODI0NzMzMDkifQ.EXh4RIoeZjSUD93uePfFc0vcwQFUgFSqNfJixjptt3E&t-c=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJndWlkK3RpbWVzdGFtcCI6IjIwMjF8MTJ8MTl8MTAifQ.09EbSZYFqG4NUoc6S4uA7Ld6XhV8uq4mBE6BO-KJHyshttps://static-yz-cdn.c-t.work/QN_FOG_cowtransfer-file-178e1a9c-2d36-4e1a-a549-b6da0af0f22a%252FBACK.jpg?t-s=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJndWlkK3RpbWVzdGFtcCI6Imlsb3ZlY293dHJhbnNmZXIyMDIxXzE2Mzk4ODI0NzMzMDkifQ.EXh4RIoeZjSUD93uePfFc0vcwQFUgFSqNfJixjptt3E&t-c=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJndWlkK3RpbWVzdGFtcCI6IjIwMjF8MTJ8MTl8MTAifQ.09EbSZYFqG4NUoc6S4uA7Ld6XhV8uq4mBE6BO-KJHys&user=38be7746-59c9-4f54-992f-49f81d1dce0e&ut=0&rt=0&rk=ff_edef2b50-28ee-4af7-8c88-d5005524ffa0&owner=38be7746-59c9-4f54-992f-49f81d1dce0e&tid=efab086b-f827-4e73-b421-b63451060cd5&batch=1639882473221&attname=BACK.jpg';
var counter = 0;
$(document).ready(function () {
    // 获取宽高
    let width = $(".bg1").width(), height = $(".bg1").height();
    console.log("width="+ width + ",height="+height);
    // 设置初始卡牌大小
    let cw = 100 * size, ch = 153 * size;
    // 构造卡牌
    function buildCard() {
        // 随机卡牌大小
        let range = Math.ceil(Math.random()*10) * fd;
        if(range == 0) return;
        let ncw = cw + range - (8 * fd), nch = ncw * 1.53;
        // 随机卡牌位置
        let nx = randomNum(0 + ncw/2, width - nch/2);
        let ny = height + randomNum(0, 200);
        var div=$('<div class="card-btn"></div>');        //创建一个父div
        let filter = range / (10 * fd);
        filter = filter < 0.3 ? 0.3 : filter;
        div.css({
            'transition': 'top '+(timerDelay/1000)+'s linear',
            'position': 'absolute', 'top': ny+ 'px', 'left': nx + 'px',
            'background': 'url("'+imgsrc+'")',
            'background-size': '100% 100%',
            'width': ncw + 'px', 'height': nch + 'px',
            'filter': 'brightness(' + filter +')',
        });    //添加css样式
        div.click(cardOnClick);
        $(".bg1").append(div);
    }
    // 刷新移动动画
    function refresh() {
        for(let i = 0; i < $('.bg1 > div').length; i++) {
            if($('.bg1 > div:eq('+i+')')[0].offsetTop < -300) {
                $('.bg1 > div:eq('+i+')').remove();
                continue;
            }
            $('.bg1 > div:eq('+i+')').css("top", $('.bg1 > div:eq('+i+')')[0].offsetTop - 10 * speed);
        }
    }
    function cardOnClick(e) {
        let ran = randomNum(0, 50);
        if(ran == 50) {
            counter = 0;
            $(".destory-after-3s").fadeIn();
            setTimeout(() => {
                $(".destory-after-3s").fadeOut(300);
            }, 2000);
        } else counter++;
        $("#counter").text("" + counter);
        let bttnBack = e.target;
        // 粒子特效
        let randomR = randomNum(150,255);
        let randomG = randomNum(150, 255);
        let randomB = randomNum(150, 255);

        let size = counter == 0 ? 8 : ((counter / 10) > 10 ? 10: (counter / 10 == 0? 1 : counter / 10 + 1))
        let particlesOpts = {
            type: 'circle',
            duration: 5000,
            easing: 'easeOutQuad',
            color: counter == 0 ? 'rgba(255,0,0,0.5)':'rgba('+randomR+','+randomG+','+randomB+',0.8)',
            direction: 'top',
            size: size,
            particlesAmountCoefficient: 2,oscilationCoefficient: 30,
            style: 'fill',
            complete: ()=> {
            }
        };
        const particles = new Particles(e.target, particlesOpts);
        particles.integrate({
            duration: 500,
            easing: 'easeOutSine'
        });

        $(e.target).remove();
    }

    if(timer == null) {
        timer = setInterval(() => refresh(), timerDelay);
    }
    if(timer2 == null) {
        timer2 = setInterval(() => buildCard(), timerDelay2);
    }
    setTimeout(() => {
        $(".destory-after-3s").fadeOut(300);
    }, 3000);

});