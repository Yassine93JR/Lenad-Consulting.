@php
    $currentLang = session('lang', 'fr');
    $texts = [
        'fr' => [
            'title' => 'Contact',
            'name' => 'Nom',
            'email' => 'Email',
            'subject' => 'Sujet',
            'message' => 'Message',
            'submit' => 'Envoyer',
        ],
        'en' => [
            'title' => 'Contact',
            'name' => 'Name',
            'email' => 'Email',
            'subject' => 'Subject',
            'message' => 'Message',
            'submit' => 'Send',
        ],
    ];
    $t = $texts[$currentLang];
@endphp

<section id="contact" class="section contact">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-reveal>{{ $t['title'] }}</h2>
            <div class="section-divider" data-reveal></div>
        </div>
        
        <div class="contact-content">
            <div class="contact-info" data-reveal>
                <div class="contact-item">
                    <h3>Organisation Internationale de la Francophonie (OIF)</h3>
                    <p>Responsable de programme médias</p>
                    <p>Depuis mars 2004</p>
                </div>
                <div class="contact-item">
                    <h3>Université Paris-III Sorbonne-Nouvelle</h3>
                    <p>Chargé de Cours</p>
                    <p>Depuis septembre 2008</p>
                </div>
                <div class="contact-item">
                    <h3>Lenad Consulting</h3>
                    <p>Fondateur : Tidiane Dioh</p>
                    <p><a href="https://lenad-consulting.com/" target="_blank">https://lenad-consulting.com/</a></p>
                </div>
            </div>
            
            <form class="contact-form" method="POST" action="{{ route('contact.send') }}" data-reveal>
                @csrf
                
                @if(session('success'))
                    <div class="form-message success">
                        {{ session('success') }}
                    </div>
                @endif
                
                @if($errors->any())
                    <div class="form-message error">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                
                <div class="form-group">
                    <label for="name">{{ $t['name'] }}</label>
                    <input type="text" id="name" name="name" required value="{{ old('name') }}">
                </div>
                
                <div class="form-group">
                    <label for="email">{{ $t['email'] }}</label>
                    <input type="email" id="email" name="email" required value="{{ old('email') }}">
                </div>
                
                <div class="form-group">
                    <label for="subject">{{ $t['subject'] }}</label>
                    <input type="text" id="subject" name="subject" required value="{{ old('subject') }}">
                </div>
                
                <div class="form-group">
                    <label for="message">{{ $t['message'] }}</label>
                    <textarea id="message" name="message" rows="5" required>{{ old('message') }}</textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">{{ $t['submit'] }}</button>
            </form>
        </div>
    </div>
</section>

