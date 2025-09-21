const layoutHeight = 480;

const Inimigos = runtime.objects.Inimigo.getAllInstances();
    for (const inimigo of Inimigos) {
        inimigo.y += 0.03;
        
        if (inimigo.y > layoutHeight) {
            inimigo.destroy();
        }
    }

const Inimigos2 = runtime.objects.Inimigo2.getAllInstances();
    for (const inimigo of Inimigos2) {
        inimigo.y += 0.03;
        
        if (inimigo.y > layoutHeight) {
            inimigo.destroy();
        }
    }

const Inimigos3 = runtime.objects.Inimigo3.getAllInstances();
    for (const inimigo of Inimigos3) {
        inimigo.y += 0.03;
        
        if (inimigo.y > layoutHeight) {
            inimigo.destroy();
        }
    }

