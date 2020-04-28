Page({
  data: {
    logs: []
  },
  onLoad: function () {
    
  },
  downloadFile: function(){
    wx.downloadFile({
      url: 'https://files.smallpdf.com/files/43965b928e454f8c85b902cc6d76bfb9.pdf',
      success: function (res) {
        console.log(res)
        var Path = res.tempFilePath              //返回的文件临时地址，用于后面打开本地预览所用
        console.log('预览文件1')
        wx.openDocument({
          filePath: Path,
          fileType: 'pdf',
          success: function (res) {
            console.log('打开成功');
          },
          fail: function(res){
            console.log(res)
          }
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  }
})