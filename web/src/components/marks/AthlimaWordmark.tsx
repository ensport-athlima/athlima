import { cn } from "@/lib/cn"

/**
 * THE ATHLIMA WORDMARK — artwork, not type (typography.md §1). Placed as inline SVG with a real <title>.
 * Letterforms use currentColor; the accent on the final A is the brand lime (colour.md §3 — the one
 * permitted lime in the mark).
 *
 * DEVELOPMENT PLACEHOLDER (B2): a potrace outline of 05_MEDIA/logos/athlima-master.jpg — see
 * 05_MEDIA/logos/vector/README.md. Replaced, path for path, when the brand owner's vector arrives.
 * The source file's C2PA metadata and two sub-pixel trace specks are stripped here.
 */
export interface AthlimaWordmarkProps {
  /** Accessible name. Pass `decorative` instead when adjacent text already says ATHLIMA. */
  title?: string
  decorative?: boolean
  className?: string
}

export function AthlimaWordmark({
  title = "ATHLIMA",
  decorative = false,
  className,
}: AthlimaWordmarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1319 231"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      className={cn("block h-auto w-full", className)}
    >
      {decorative ? null : <title>{title}</title>}
      <g fill="currentColor" transform="translate(0,231) scale(0.1,-0.1)">
        <path d="M1045 2254 c-14 -31 -25 -58 -25 -59 0 -4 -177 -409 -317 -725 -52 -118 -110 -249 -128 -290 -102 -231 -202 -459 -322 -730 -167 -376 -194 -440 -185 -440 100 -7 331 -6 343 1 9 4 36 52 59 106 23 54 81 186 128 293 85 196 102 236 184 430 44 102 278 650 300 700 10 24 13 21 50 -60 22 -47 76 -170 120 -275 44 -104 95 -224 113 -265 18 -41 54 -124 80 -185 26 -60 53 -123 60 -140 44 -99 123 -283 185 -430 39 -94 73 -171 75 -173 4 -5 356 -4 361 1 2 2 -21 62 -52 133 -31 71 -69 159 -84 195 -15 37 -66 154 -113 260 -47 107 -133 302 -190 434 -58 132 -136 312 -175 400 -39 88 -121 275 -182 415 -62 140 -127 289 -145 330 -19 41 -38 87 -44 103 -8 21 -17 27 -41 27 -27 0 -33 -6 -55 -56z" />
        <path d="M1890 2125 c0 -169 1 -185 18 -185 9 -1 168 -2 352 -3 l335 -2 5 -964 5 -964 164 -1 c162 -1 163 -1 172 22 5 13 9 448 9 968 l0 944 360 0 360 0 0 185 0 185 -890 0 -890 0 0 -185z" />
        <path d="M3952 1158 l3 -1153 163 0 c90 0 168 2 173 6 5 3 10 212 11 475 l3 469 573 2 572 2 0 -468 c0 -363 3 -471 13 -479 8 -7 69 -8 175 -5 154 6 163 7 167 27 3 12 4 527 3 1146 l-3 1125 -175 0 c-133 0 -175 -3 -176 -12 -1 -7 -2 -224 -3 -483 l-1 -470 -575 0 -575 0 0 485 0 485 -175 0 -175 0 2 -1152z" />
        <path d="M6132 1159 l3 -1150 795 0 c437 1 801 1 808 1 9 0 12 45 12 190 l0 190 -632 2 -633 3 -3 958 -2 957 -175 0 -175 0 2 -1151z" />
        <path d="M8087 2303 c-4 -3 -7 -518 -7 -1143 0 -898 3 -1140 13 -1147 6 -5 84 -9 172 -8 l160 2 3 1152 2 1151 -168 0 c-93 0 -172 -3 -175 -7z" />
        <path d="M8799 2283 c0 -16 -2 -531 -3 -1146 -1 -777 1 -1120 8 -1125 20 -13 325 -10 336 3 6 8 11 305 12 795 l3 782 46 -73 c118 -189 285 -459 379 -614 56 -93 121 -200 144 -236 22 -36 57 -93 76 -127 53 -92 66 -91 122 7 64 114 536 898 584 971 l49 75 5 -795 5 -795 155 0 c85 0 163 4 173 8 16 7 17 72 17 1153 l0 1144 -162 -2 -163 -3 -81 -130 c-81 -129 -240 -390 -494 -810 -73 -121 -138 -226 -145 -234 -11 -11 -27 10 -92 120 -93 156 -442 724 -566 919 l-85 135 -161 3 -161 2 -1 -27z" />
        <path d="M12076 2258 c-13 -29 -40 -91 -59 -138 -54 -129 -536 -1257 -607 -1420 -16 -36 -74 -173 -130 -305 -57 -132 -116 -271 -132 -308 -16 -38 -27 -72 -23 -75 9 -9 337 -4 347 6 4 4 19 35 32 67 13 33 42 103 64 155 39 93 156 372 234 560 21 52 84 203 138 335 169 412 175 424 184 414 2 -2 52 -121 110 -264 59 -143 115 -279 126 -303 l20 -43 33 19 c17 11 73 41 122 67 50 26 98 55 107 64 18 17 29 -13 -147 406 -93 222 -322 759 -335 788 -9 18 -21 27 -37 27 -19 0 -29 -10 -47 -52z" />
      </g>
      <g fill="var(--lime)" transform="translate(1238,0)">
        <g transform="translate(0,231) scale(0.1,-0.1)">
          <path d="M280 935 c-25 -13 -85 -46 -133 -72 -72 -39 -87 -52 -84 -68 2 -11 77 -192 167 -403 l164 -382 173 0 c109 0 173 4 173 10 0 12 -107 262 -335 785 -31 72 -59 136 -62 143 -7 17 -12 16 -63 -13z" />
        </g>
      </g>
    </svg>
  )
}
