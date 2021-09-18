var reasons=[
  "This is my Dady",
  "This is my Mom",
  "This is my sister",
  "This is my Grandfather",
  "This is my Grandmother",
];
var image=[
  "https://www.bing.com/images/search?view=detailV2&ccid=nZv%2fJwEl&id=876076A99B21128C356F1A012F996A0F09F07503&thid=OIP.nZv_JwElowrbOqg1QxBtCwHaKZ&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9d9bff270125a30adb3aa83543106d0b%3frik%3dA3XwCQ9qmS8BGg%26riu%3dhttp%253a%252f%252fcdn.shopify.com%252fs%252ffiles%252f1%252f2068%252f3659%252ffiles%252fFatherTimeBread_FelixBust.png%253fv%253d1510449596%26ehk%3dXoqTtCoPvxWBeNhCfAsg%252b%252bweYBCvq6UEIHKxK2H8uzk%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1185&expw=844&q=Animated+Dad&simid=607996425265220151&FORM=IRPRST&ck=709810298F8B321EB5C4D6780F324E65&selectedIndex=64",
  "https://www.bing.com/images/search?view=detailV2&ccid=t7tRMuoz&id=F9B18171EB0F07B5A326CA1B1CF4D70BE8A8CBA2&thid=OIP.t7tRMuoz65X__AkXXE1ObgHaNI&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b7bb5132ea33eb95fffc09175c4d4e6e%3frik%3dosuo6AvX9Bwbyg%26riu%3dhttp%253a%252f%252fclipart-library.com%252fimages%252f8iGbeGgaT.png%26ehk%3dRVmNgQytHS%252bKpnwsrBcuMDjtnbC5bq1XWO4qBcZ6F2I%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=800&expw=451&q=Animated+mom&simid=608007003769763903&FORM=IRPRST&ck=6C3255ECBBE8061FB44223C9333FF783&selectedIndex=29",
  "https://www.bing.com/images/search?view=detailV2&ccid=44j2EHJM&id=27602D68E2353923F37F2BB5864453A693B8175E&thid=OIP.44j2EHJMQDtH_MABxSO1tgHaFj&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp1890201.jpg&exph=1125&expw=1500&q=Animated+sister&simid=608001991545724074&FORM=IRPRST&ck=79E9006F21A19DABD64AE94006AAB24D&selectedIndex=0",
  "https://www.bing.com/images/search?view=detailV2&ccid=AUftiPwQ&id=5D2A5A4AC9B4B877F79D3999AA4E7EF614EB8BD1&thid=OIP.AUftiPwQ8cT-BpMnhyd5-QHaGS&mediaurl=https%3a%2f%2fwww.clipartkey.com%2fmpngs%2fm%2f298-2980192_grandpa-clipart-animated-grandfather-clipart.png&exph=764&expw=900&q=Animated+grandfather&simid=608020885102485442&FORM=IRPRST&ck=68FCB9D39D042526AF1B3350758516F3&selectedIndex=0",
  "https://www.bing.com/images/search?view=detailV2&ccid=T09dvXCF&id=C316BD4D8EA6AD50459CFC8E4C342D5CA0F8DAD8&thid=OIP.T09dvXCF5yCLImPANxuvdAHaMl&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4f4f5dbd7085e7208b2263c0371baf74%3frik%3d2Nr4oFwtNEyO%252fA%26riu%3dhttp%253a%252f%252fclipground.com%252fimages%252fgrandmother-clipart-4.jpg%26ehk%3d%252f%252bYsFoFfsvYEHa6Qe8XLItZ%252fWn35Z4qIk3EUk1UeN64%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=959&expw=564&q=Animated+grandmother+&simid=607989514668425933&FORM=IRPRST&ck=E533848AE42B91BD141EC59E633E070F&selectedIndex=2"
];
var i=0;
function nextslide()
{
document.getElementById 
("reasontext").innerHTML=reasons[
i];
document.getElementById ("family_member_image").src=image[i];
i++; } 