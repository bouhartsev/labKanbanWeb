<template>
  <label for="themeToggler" class="togglerLabel">Theme
    <div class="wrap">
      <input type="checkbox" id="themeToggler" />
      <div class="totoro">
        <div class="ears">
          <div class="ear"></div>
          <div class="ear"></div>
        </div>
        <div class="arm"></div>
        <div class="arm"></div>
        <div class="foot"></div>
        <div class="foot two"></div>
        <div class="body">
          <div class="spots">
            <div class="spot"></div>
            <div class="spot"></div>
            <div class="spot"></div>
            <div class="spot"></div>
            <div class="spot"></div>
            <div class="spot"></div>
            <div class="spot"></div>
          </div>
          <div class="inner">
            <div class="mouth"></div>
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "ThemeToggle",
};
</script>

<style lang="scss">
$g: #bbb;
$b: #222;
$y: #ffffff;
$gr: #a6cd52;
$color: white;

body {
  .togglerLabel {
    display: flex;
    font-size: 2.5rem;
    align-items: center;
  }
  .wrap {
      margin-left: 15px;
      float:right;
    cursor: pointer;
    
    $width: 100px;
    $one_px: 1px; //275
    width: 275*$one_px;
    height: 100*$one_px;
    position: relative;
    box-shadow: 0 0 0 2*$one_px #eee, 0 0 40*$one_px 0*$one_px rgba(0, 0, 0, 0.15);
    border-radius: (500*$one_px);
    background: #fff;
    * {
      cursor: pointer;
      transition: 0.25s linear;
    }
    .totoro {
      position: absolute;
      width: 36%;
      height: 150%;
      left: 0*$one_px;
      top: -30*$one_px;
      background: $g;
      border-radius: (170*$one_px) (170*$one_px) (100*$one_px) (100*$one_px) / (300*$one_px) (300*$one_px) (200*$one_px) (200*$one_px);
      z-index: 2;
      .ears {
        position: absolute;
        width: 90%;
        height: 40*$one_px;
        left: 5%;
        .ear {
          position: absolute;
          width: 10*$one_px;
          height: 25*$one_px;
          background: $g;
          top: -10*$one_px;
          left: 7.5*$one_px;
          border-radius: (700*$one_px) (700*$one_px) (500*$one_px) (500*$one_px) / (2750*$one_px) (2750*$one_px) (500*$one_px) (500*$one_px);
          &:after {
            content: "";
            position: absolute;
            width: 4*$one_px;
            height: 15*$one_px;
            background: $g;
            left: calc(50% - 2*$one_px);
            bottom: -15*$one_px;
          }
          &:nth-of-type(2) {
            left: auto;
            right: 7.5*$one_px;
          }
        }
      }
      .foot {
        width: 40*$one_px;
        height: 20*$one_px;
        background: $g;
        position: absolute;
        bottom: 0;
        left: 5*$one_px;
        $bord_rad_loc2: (300*$one_px) (200*$one_px) (200*$one_px) (200*$one_px) / (200*$one_px) (100*$one_px) (100*$one_px) (100*$one_px);
        border-radius: $bord_rad_loc2;
        transform-origin: top right;
        transform: rotate(0deg) scaleY(1) scaleX(1);
        &.two {
          left: auto;
          right: 5*$one_px;
          transform-origin: top left;
          border-radius: $bord_rad_loc2;
        }
      }
      .arm {
        width: 25*$one_px;
        height: 60*$one_px;
        background: $g;
        position: absolute;
        left: 0*$one_px;
        z-index: -1;
        top: 50*$one_px;
        border-radius: (550*$one_px) (100*$one_px) (400*$one_px) (400*$one_px) / (700*$one_px) (200*$one_px) (600*$one_px) (800*$one_px);
        transform: rotate(10deg);
        transform-origin: top right;
        &:nth-of-type(2) {
          left: auto;
          right: 0*$one_px;
          border-radius: (100*$one_px) (550*$one_px) (400*$one_px) (400*$one_px) / (200*$one_px) (700*$one_px) (800*$one_px) (600*$one_px);
          transform: rotate(-10deg);
          transform-origin: top left;
        }
      }
      .body {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: (170*$one_px) (170*$one_px) (100*$one_px) (100*$one_px) / (300*$one_px) (300*$one_px) (200*$one_px) (200*$one_px);
        left: 0;
        top: 0;
        overflow: hidden;
        z-index: 2;
        .spots {
          position: absolute;
          width: 90%;
          height: 57.5%;
          background: $y;
          bottom: 10*$one_px;
          left: 5%;
          $bord_rad_loc: (300*$one_px) (300*$one_px) (300*$one_px) (300*$one_px) / (300*$one_px) (300*$one_px) (500*$one_px) (500*$one_px);
          border-radius: $bord_rad_loc;
          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: $y;
            border-radius: $bord_rad_loc;
          }
          .spot {
            content: "";
            position: absolute;
            width: 15*$one_px;
            height: 15*$one_px;
            border-radius: (50*$one_px);
            box-shadow: 0 -5*$one_px 0 darken($g, 20%);
            left: calc(50% - 6.5*$one_px);
            top: 10*$one_px;
            transform: translateZ(20*$one_px) scaleX(0.75) scale(0.75);
            &:nth-of-type(2),
            &:nth-of-type(3) {
              top: 15*$one_px;
              left: calc(50% - 25*$one_px);
            }
            &:nth-of-type(3) {
              left: calc(50% + 10*$one_px);
            }
            &:nth-of-type(n + 4) {
              top: 30*$one_px;
              left: 10*$one_px;
            }
            &:nth-of-type(5) {
              left: 30*$one_px;
            }
            &:nth-of-type(6) {
              left: 50*$one_px;
            }
            &:nth-of-type(7) {
              left: 70*$one_px;
            }
            &:before,
            &:after {
              content: "";
              position: absolute;
              width: 5*$one_px;
              height: 10*$one_px;
              background: darken($g, 20%);
              border-radius: 200%;
              left: -2.5*$one_px;
              transform: rotate(45deg);
              bottom: 10*$one_px;
            }
            &:after {
              transform: rotate(-45deg);
              left: 10*$one_px;
            }
          }
        }
        .inner {
          position: absolute;
          width: 100%;
          height: 30*$one_px;
          top: 15*$one_px;
          &:before {
            content: "";
            position: absolute;
            width: 17.5*$one_px;
            height: 6*$one_px;
            background: #222;
            left: calc(50% - 8.75*$one_px);
            top: 10*$one_px;
            border-radius: (200*$one_px) (200*$one_px) (100*$one_px) (100*$one_px) / (100*$one_px) (100*$one_px) (50*$one_px) (50*$one_px);
          }
          .mouth {
            position: absolute;
            width: 50*$one_px;
            height: 10*$one_px;
            background: repeating-linear-gradient(
              to right,
              #fff,
              #fff 10*$one_px,
              #222 10*$one_px,
              #222 11*$one_px,
              #fff 11*$one_px
            );
            bottom: 0*$one_px;
            left: calc(50% - 25*$one_px);
            border-radius: (25*$one_px) (25*$one_px) (300*$one_px) (300*$one_px) / (25*$one_px) (25*$one_px) (200*$one_px) 200*$one_px;
            box-shadow: inset 0 0 0 (1*$one_px) darken($g, 10%);
          }
          .eye {
            position: absolute;
            top: 5*$one_px;
            width: 12.5*$one_px;
            height: 12.5*$one_px;
            background: $b;
            left: 20*$one_px;
            border-radius: 100%;
            box-shadow: inset 0 0 0 (1*$one_px) darken($g, 10%), inset 0 0 0 (4.5*$one_px) #fff;
            &:nth-of-type(2) {
              left: auto;
              right: 20*$one_px;
            }
          }
        }
      }
    }
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 999;
      opacity: 0;
      &:checked {
        & ~ .totoro {
          transform: translateX(180*$one_px) translateY(-5*$one_px);
          transition: 0.5s linear;
          * {
            transition: 0.5s linear;
          }
          .foot {
            transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition-delay: 0.45s, 0.45s;
            transform: rotate(-75deg) scaleY(1.5) scaleX(1.5) translateY(-10*$one_px)
              translateX(10*$one_px);
            &.two {
              transform: rotate(75deg) scaleY(1.5) scaleX(1.5) translateY(-10*$one_px)
                translateX(-10*$one_px);
            }
          }
          .arm {
            transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition-delay: 0.45s, 0.45s;
            transform: rotate(40deg) translateX(7.5*$one_px);
            &:nth-of-type(2) {
              transform: rotate(-40deg) translateX(-7.5*$one_px);
            }
          }
          .ears {
            .ear {
              left: 70*$one_px;
              animation: ear1 1s ease-in-out infinite alternate;
              transform-origin: -20% 120%;
              @keyframes ear1 {
                to {
                  transform: rotate(5deg) translateY(-2.5*$one_px);
                }
              }
              &:nth-of-type(2) {
                left: auto;
                right: 70*$one_px;
                animation: ear2 1s ease-in-out infinite alternate;
                transform-origin: 120% 120%;
                @keyframes ear2 {
                  to {
                    transform: rotate(-5deg) translateY(-2.5*$one_px);
                  }
                }
              }
            }
          }
          .body {
            .mouth {
              box-shadow: inset 0 0 0 2*$one_px darken($g, 35%);
              height: 2*$one_px;
              bottom: 2.5*$one_px;
              width: 20*$one_px;
              left: calc(50% - 10*$one_px);
            }
            .spots {
              &:before {
                animation: breathe2 1s ease-in-out infinite alternate;
                transform-origin: bottom;
                @keyframes breathe2 {
                  to {
                    transform: scale(1.025);
                  }
                }
              }
            }
            .inner {
              &:before {
                animation: shake 3s ease-in-out infinite;
                @keyframes shake {
                  90% {
                    transform: translateX(0*$one_px);
                  }
                  91% {
                    transform: translateX(1*$one_px);
                  }
                  92% {
                    transform: translateX(0*$one_px);
                  }
                  93% {
                    transform: translateX(-1*$one_px);
                  }
                  94% {
                    transform: translateX(0*$one_px);
                  }
                }
              }
            }
            .inner,
            .spots {
              .spot {
                animation: breathe 1s ease-in-out infinite alternate;
                @keyframes breathe {
                  to {
                    transform: translateZ(20*$one_px) scaleX(0.8) scale(0.75)
                      translateY(-5*$one_px) rotateX(-20deg);
                  }
                }
              }
              .eye {
                box-shadow: inset 0 0 0 1*$one_px darken($g, 35%),
                  inset 0 0 0 4.5*$one_px #fff;
                height: 2*$one_px;
                width: 7.5*$one_px;
                transform: translateX(7.5*$one_px);
                &:nth-of-type(2) {
                  transform: translateX(-7.5*$one_px);
                }
              }
              animation: roll1 0.5s linear 1 forwards;
              @keyframes roll1 {
                0% {
                  transform: translateX(0%);
                }
                50% {
                  transform: translateX(100%) rotateY(150deg);
                }
                50.001% {
                  transform: translateX(-100%) rotateY(-150deg);
                }
                100% {
                  transform: translateX(0%);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>