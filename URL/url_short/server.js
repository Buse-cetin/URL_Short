
const express=require('express');
const app=express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const ShortUrl=require('./models/shortUrl')

mongoose.connect('') // can be secured with using .env i deleted to database way...

app.set('view engine','ejs');

app.use(express.static("public"));



app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false
  }));


  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  // Hash the password before saving the user to the database
  userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, hashedPassword) => {
      if (err) return next(err);
      user.password = hashedPassword;
      next();
    });
  });

const User = mongoose.model('User', userSchema)

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.json());

app.use(express.urlencoded({

     extended:false
}))

app.get('/register', (req, res) => {
  res.render('sign_up');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  
  const user = new User({ username, password });

  
  user.save((err, user) => {
    if (err) {
      console.error(err);
      res.send('An error occurred while trying to create your account.');
      return;
    }

    res.redirect('/login');
  });
});
app.get('/login', (req, res) => {
    res.render('login');
  });
  
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    
    User.findOne({ username }, (err, user) => {
      if (err) {
        console.error(err);
        res.send('An error occurred while trying to log in.');
        return;
      }
  
      
      if (!user) {
        res.render('login', err);
        return;
      }
  
      
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          res.send('An error occurred while trying to log in.');
          return;
        }
  
       
        if (result) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.render('login');
        }
    });
  });
});


app.get('/team.ejs', async(req,res)=>{
   const shortUrls= await ShortUrl.find()
   const index=shortUrls.length-1
   data=shortUrls[index];
     res.render('team',{shortUrls:shortUrls,data:data});
   
})
app.get('/choose.ejs', async(req,res)=>{
  const shortUrls= await ShortUrl.find()
  const sayi=shortUrls.length
  
  
  
    res.render('choose',{shortUrls:shortUrls,sayi:sayi});
  
})






app.get('/index.ejs', async(req,res)=>{
  
    res.render('index');
  
})

app.get('/statistics.ejs', async(req,res)=>{
  
  res.render('statistics');

})
app.get('/admin.ejs', async(req,res)=>{
  
  const shortUrls= await ShortUrl.find()
  const sayi=shortUrls.length
  
   const kullanici=await User.find()
    const toplam=kullanici.length
       
    
   
  
    res.render('index_admin',{shortUrls:shortUrls,sayi:sayi,toplam:toplam,veri:veri});

})
app.get('/about.ejs', async(req,res)=>{
  
  res.render('about');

})

app.get('/contact.ejs', async(req,res)=>{
  
  res.render('contact');

})

app.get('/login_admin.ejs', async(req,res)=>{
  
  res.render('login_admin');

})

app.get('/login.ejs', async(req,res)=>{
  
  res.render('login');

})

app.get('/main.ejs', async(req,res)=>{
  
  res.render('main');

})

app.get('/services.ejs', async(req,res)=>{
  
  res.render('services');

})
app.get('/', async(req,res)=>{
  
  res.render('index');

})



app.get('/sign_up.ejs', async(req,res)=>{
  
  res.render('sign_up');

})

app.get('/listele', async(req,res)=>{
   const shortUrls= await ShortUrl.find()
    res.send(shortUrls)
})


app.post('/shortUrls', async (req,res)=>{
 await ShortUrl.create({full:req.body.fullUrl})

 res.redirect('/team.ejs')
})

app.post('/create', async (req,res)=>{
   
    
    res.send( await ShortUrl.create({full:req.body.full}));
   })



app.get('/:shortUrl',async(req,res)=>{

    const shortUrl= await ShortUrl.findOne({short:req.params.shortUrl})
    if(shortUrl==null) return res.sendStatus(404)


    shortUrl.clicks++
    shortUrl.save();
    res.redirect(shortUrl.full);
   
})


app.delete('/:shortlink',async(req,res)=>{

  const shortlink= await ShortUrl.deleteOne({short:req.params.shortlink})
  res.send(shortlink);


  
 
})





app.listen(process.env.PORT||3000);





