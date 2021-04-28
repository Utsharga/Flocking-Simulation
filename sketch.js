const flock =[];

let alignSlider, cohesionSlider, sperationSlider;

function setup() {
    let cnv = createCanvas(1000,720);
    // cnv.center('horizontal');
    // cnv.position('absolute');

    alignSlider = createSlider(0, 5, 1 ,0.1);
    alignText = createElement('p', 'Alignment');
    // alignText.position(40, 750);
    cohesionSlider = createSlider(0, 5, 1 ,0.1);
    cohesionText = createElement('p', 'Cohesion');
    // cohesionText.position(40, 790);
    seperationSlider = createSlider(0, 5, 1 ,0.1);
    seperationText = createElement('p', 'Seperation');
    // seperationText.position(40, 830);
    // alignSlider.position(30, 750);
    // cohesionSlider.position(30, 790);
    // seperationSlider.position(30, 830);

    for (let i = 0; i < 100; i++) {
        flock.push(new Boid());
    }
};

function draw() {
    background(51);

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}