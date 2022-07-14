const explorer = {
    name: 'root',
    isFolder:true,
    items: [
        {
            name: 'public',
            isFolder:true,
            items: [
                {
                    name: 'favicon.ico',
                    isFolder: false,
                },
                {
                    name: 'index.html',
                    isFolder: 'false'
                },
                {
                    name: 'logo192.png',
                    isFolder: false
                },
                {
                    name: 'logo512.png',
                    isFolder: false
                },
                {
                    name: 'manifest.json',
                    isFolder: false
                },
                {
                    name: 'robots.txt',
                    isFolder: false
                }               
            ]         
        },
        {
            name: 'src',
            isFolder: true,
            items: [
                {
                    name: 'data',
                    isFolder: true
                },
                {
                    name: 'App.js',
                    isFolder: false
                },
                {
                    name: 'index.css',
                    isFolder: false
                },
                {
                    name: 'index.js',
                    isFolder: false
                }
            ]
        },
        {
            name: 'package.json',
            isFolder: false
        },
        {
            name: 'package-lock.json',
            isFolder: false
        },
        {
            name: 'README.md',
            isFolder: false
        }   
    
    ]
}